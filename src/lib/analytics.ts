/**
 * Anonymous page and contact-click counts, sent to PostHog.
 *
 * Follows the same pattern as Venfy: events go to the shared Engrana project
 * (449489) and carry `app = michaelliendo`, so filter on that property in any
 * chart. No PostHog script is loaded and nothing is stored in cookies; each tab
 * gets a random id that disappears when it closes. Browsers asking not to be
 * tracked (Global Privacy Control / Do Not Track) send nothing.
 */

/** Public, write-only project token of the Engrana project (ID 449489). */
const POSTHOG_KEY = "phc_n4CgfT4drk4RpUBqqhMR2AcjHcaBzNb8C3TbD3TNYA7m";
const CAPTURE_URL = "https://us.i.posthog.com/i/v0/e/";
const APP = "michaelliendo";
const VISITOR_KEY = "ml-visitor";

export type AnalyticsEvent = "page_viewed" | "contact_clicked";

type Properties = Record<string, string | number | boolean | null | undefined>;

function trackingAllowed(): boolean {
	if (import.meta.env.DEV) return false;
	const nav = navigator as Navigator & { globalPrivacyControl?: boolean };
	return !(nav.globalPrivacyControl || nav.doNotTrack === "1");
}

function visitorId(): string {
	try {
		const existing = sessionStorage.getItem(VISITOR_KEY);
		if (existing) return existing;
		const id = crypto.randomUUID();
		sessionStorage.setItem(VISITOR_KEY, id);
		return id;
	} catch {
		return crypto.randomUUID();
	}
}

function deviceType(): "mobile" | "tablet" | "desktop" {
	const width = window.innerWidth;
	if (width < 768) return "mobile";
	if (width < 1024) return "tablet";
	return "desktop";
}

export function track(event: AnalyticsEvent, properties: Properties = {}): void {
	if (typeof window === "undefined" || !trackingAllowed()) return;

	const body = JSON.stringify({
		api_key: POSTHOG_KEY,
		event,
		distinct_id: visitorId(),
		properties: {
			app: APP,
			// Anonymous events: no person profiles in the shared project.
			$process_person_profile: false,
			$current_url: window.location.href,
			$host: window.location.host,
			$pathname: window.location.pathname,
			// PostHog tells people from bots by this; without it every visit is "Automation".
			$raw_user_agent: navigator.userAgent,
			locale: document.documentElement.lang,
			device: deviceType(),
			...properties,
		},
	});

	// keepalive lets the request finish when the click leaves the page.
	fetch(CAPTURE_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body,
		keepalive: true,
	}).catch(() => {});
}

export function referrerHost(): string | null {
	try {
		const host = document.referrer ? new URL(document.referrer).host : null;
		return host && host !== window.location.host ? host : null;
	} catch {
		return null;
	}
}

/** Which part of the page a contact link sits in, for `contact_clicked`. */
export function contactLocation(link: Element): string {
	if (link.closest("header")) return "header";
	if (link.closest("footer")) return "footer";
	const section = link.closest("section[id]");
	return section?.id ?? "page";
}

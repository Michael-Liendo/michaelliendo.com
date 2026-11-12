/**
 * Site analytics with posthog-js, sent to the shared PostHog project (449489).
 *
 * Every event carries `app = michaelliendo`, so filter on that property in any
 * chart. posthog-js adds automatic page views, page leaves, autocapture,
 * heatmaps, Web Vitals and session replays (inputs masked). No cookies: state
 * lives in sessionStorage and disappears when the tab closes, and no person
 * profiles are created for anonymous visitors. Browsers asking not to be
 * tracked (Global Privacy Control / Do Not Track) send nothing.
 *
 * posthog-js is loaded after the page is interactive so it doesn't slow down
 * the first paint; events tracked before that are queued and sent once it loads.
 */
import type { PostHog } from "posthog-js";

/** Public, write-only project token of the shared project (ID 449489). */
const POSTHOG_KEY = "phc_n4CgfT4drk4RpUBqqhMR2AcjHcaBzNb8C3TbD3TNYA7m";
const APP = "michaelliendo";

export type AnalyticsEvent =
	| "page_viewed"
	| "contact_clicked"
	| "outbound_link_clicked"
	| "chat_simulation_started"
	| "chat_simulation_completed"
	| "note_read"
	| "theme_toggled";

type Properties = Record<string, string | number | boolean | null | undefined>;

let client: PostHog | null = null;
let loading = false;
const queue: Array<[AnalyticsEvent, Properties, boolean]> = [];

function trackingAllowed(): boolean {
	if (typeof window === "undefined" || import.meta.env.DEV) return false;
	const nav = navigator as Navigator & { globalPrivacyControl?: boolean };
	return !(nav.globalPrivacyControl || nav.doNotTrack === "1");
}

function deviceType(): "mobile" | "tablet" | "desktop" {
	const width = window.innerWidth;
	if (width < 768) return "mobile";
	if (width < 1024) return "tablet";
	return "desktop";
}

function send(event: AnalyticsEvent, properties: Properties, leavesPage: boolean) {
	client?.capture(
		event,
		{ locale: document.documentElement.lang, ...properties },
		// sendBeacon lets the request finish when the click leaves the page.
		leavesPage ? { transport: "sendBeacon" } : undefined,
	);
}

/** Loads posthog-js once. Call it from the root layout after mount. */
export async function initAnalytics(): Promise<void> {
	if (client || loading || !trackingAllowed()) return;
	loading = true;
	const { default: posthog } = await import("posthog-js");
	posthog.init(POSTHOG_KEY, {
		// PostHog's managed reverse proxy on our own subdomain, so ad blockers don't drop events.
		api_host: "https://t.michaelliendo.com",
		ui_host: "https://us.posthog.com",
		defaults: "2026-08-30",
		persistence: "sessionStorage",
		person_profiles: "identified_only",
		respect_dnt: true,
		capture_pageview: "history_change",
		capture_pageleave: true,
		autocapture: true,
		capture_dead_clicks: true,
		enable_heatmaps: true,
		capture_performance: { web_vitals: true },
		session_recording: { maskAllInputs: true },
		loaded: () => {
			// Tag everything (including $pageview and replays) with this site.
			posthog.register({ app: APP, device: deviceType() });
			client = posthog;
			for (const [event, properties, leavesPage] of queue.splice(0)) {
				send(event, properties, leavesPage);
			}
		},
	});
}

export function track(
	event: AnalyticsEvent,
	properties: Properties = {},
	{ leavesPage = false }: { leavesPage?: boolean } = {},
): void {
	if (!trackingAllowed()) return;
	if (client) send(event, properties, leavesPage);
	else queue.push([event, properties, leavesPage]);
}

export function referrerHost(): string | null {
	try {
		const host = document.referrer ? new URL(document.referrer).host : null;
		return host && host !== window.location.host ? host : null;
	} catch {
		return null;
	}
}

/** Which part of the page a link sits in, for click events. */
export function contactLocation(link: Element): string {
	if (link.closest("header")) return "header";
	if (link.closest("footer")) return "footer";
	const section = link.closest("section[id]");
	return section?.id ?? "page";
}

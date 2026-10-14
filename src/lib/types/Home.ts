/** Static copy for the landing page, one object per locale. */

export interface HomeMetric {
	value: string;
	label: string;
}

export interface HomeChatMessage {
	from: "customer" | "bot";
	text: string;
}

export interface HomeCase {
	tag: string;
	logo: string;
	title: string;
	body: string;
	metrics: HomeMetric[];
	link: { href: string; label: string };
	/** Visual shown next to the copy: a chat mockup or a screenshot. */
	chat?: {
		name: string;
		status: string;
		messages: HomeChatMessage[];
	};
	image?: { src: string; alt: string; width: number; height: number };
}

export interface HomeMoreItem {
	name: string;
	/** Small square brand mark shown before the name. */
	logo?: string;
	description: string;
	meta: string;
	href?: string;
}

export interface HomeTestimonial {
	quote: string;
	name: string;
	role: string;
	company: string;
	/** Company logo path under /static, shown instead of initials. */
	logo?: string;
	/** Person's photo path under /static; takes precedence over the logo. */
	photo?: string;
}

export interface HomeContent {
	email: string;
	hero: {
		availability: string;
		headlineStart: string;
		headlineHighlight: string;
		lead: string;
		ctaPrimary: string;
		ctaSecondary: string;
		trustedLabel: string;
	};
	clients: { name: string; logo?: string }[];
	cases: {
		label: string;
		title: string;
		items: HomeCase[];
		more: HomeMoreItem[];
		allProjects: string;
	};
	testimonials: {
		label: string;
		title: string;
		items: HomeTestimonial[];
	};
	process: {
		label: string;
		title: string;
		steps: { title: string; body: string }[];
	};
	about: {
		label: string;
		title: string;
		paragraphs: string[];
		photoAlt: string;
		stack: { name: string; icon: string }[];
		/** Business tools Michael connects to, shown as a second row. */
		integrationsLabel: string;
		integrations: { name: string; icon: string }[];
	};
	notes: { label: string; title: string; all: string };
	contact: {
		title: string;
		body: string;
		whatsappCta: string;
	};
}

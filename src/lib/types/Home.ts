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
	description: string;
	meta: string;
	href?: string;
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
	};
	notes: { label: string; title: string; all: string };
	contact: {
		title: string;
		body: string;
		whatsappCta: string;
	};
}

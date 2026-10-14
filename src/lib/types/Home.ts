/** Static copy for the landing page. Strings marked `Html` may contain trusted inline markup (links, em). */

export interface HomeChatMessage {
	from: "customer" | "bot";
	time: string;
	text?: string;
	/** Renders a photo placeholder bubble with this label instead of text. */
	attachment?: string;
}

export interface HomeMetric {
	value: string;
	label: string;
}

export interface HomeFeatured {
	/** Small square brand mark shown next to the title. */
	logo: string;
	title: string;
	meta: string;
	body: string;
	stack: string;
	link: { href: string; label: string };
	metrics?: HomeMetric[];
	image?: { src: string; alt: string; width: number; height: number };
	chat?: {
		avatar: string;
		name: string;
		status: string;
		typing: string;
		messages: HomeChatMessage[];
		caption: string;
	};
}

export interface HomeListItem {
	name: string;
	description: string;
	meta: string;
	href?: string;
}

export interface HomeSkill {
	/** Logo path under /static/icons. */
	icon: string;
	name: string;
	description: string;
	badge: string;
}

export interface HomeContent {
	hero: {
		role: string;
		ctaPrimary: string;
		ctaSecondary: string;
		stats: HomeMetric[];
		headlineStart: string;
		headlineEm: string;
		headlineEnd: string;
		paragraphs: string[];
		photoAlt: string;
		emailLabel: string;
		location: string;
		availability: string;
	};
	labels: {
		now: string;
		work: string;
		experience: string;
		how: string;
		languages: string;
		frameworks: string;
		tech: string;
		spoken: string;
		notes: string;
		allProjects: string;
		allNotes: string;
	};
	nowHtml: string[];
	featured: HomeFeatured[];
	more: HomeListItem[];
	experience: { role: string; org: string; period: string }[];
	experienceBefore: string;
	how: string[];
	languages: HomeSkill[];
	frameworks: HomeSkill[];
	tech: { name: string; description: string }[];
	spoken: { name: string; level: string; note: string }[];
	contact: {
		title: string;
		bodyHtml: string;
		emailCta: string;
		whatsappCta: string;
		reply: string;
	};
	email: string;
}

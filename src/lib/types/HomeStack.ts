export type HomeStackSectionIcon =
	| "code"
	| "wrench"
	| "database"
	| "cloud";

export interface HomeStackItem {
	name: string;
	description: string;
	/** Optional timeline / experience label (bottom-right). */
	period?: string;
	/**
	 * Simple Icons slug (see https://simpleicons.org/) — loaded as SVG from jsDelivr
	 * (`simple-icons@13.16.0/icons/{slug}.svg`), styled for dark UI.
	 */
	icon_slug?: string;
}

export interface HomeStackSection {
	title: string;
	icon: HomeStackSectionIcon;
	items: HomeStackItem[];
}

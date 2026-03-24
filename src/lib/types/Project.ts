export interface Project {
	name: string;
	/** Job title or engagement role (shown under the project name). */
	role?: string;
	description: string;
	preview_url?: string;
	repo_url?: string;
	/** Logo or cover image (e.g. company favicon URL). */
	image_url?: string;
	tags: string[];
	/** ISO date for sorting (typically role start date). */
	date: string;
	/** Human-readable date range, e.g. LinkedIn-style “Nov 2025 – Present”. */
	period?: string;
	/** Shown in the first section on the projects page (client and product work). */
	featured?: boolean;
}

import { neon } from "@neondatabase/serverless";
import { env } from "$env/dynamic/private";

function getSql() {
	const url = env.DATABASE_URL?.trim();
	if (!url) return null;
	return neon(url);
}

export function isLeadsDatabaseConfigured(): boolean {
	return Boolean(env.DATABASE_URL?.trim());
}

export type LeadRow = {
	id: number;
	name: string;
	email: string;
	phone: string;
	process: string;
	wants_guide: number;
	locale: string;
	created_at: string;
};

export async function insertLead(payload: {
	name: string;
	email: string;
	phone: string;
	process: string;
	wantsGuide: boolean;
	locale: string;
	submittedAt: string;
}): Promise<void> {
	const sql = getSql();
	if (!sql) {
		throw new Error("DATABASE_URL not configured");
	}

	await sql`
		CREATE TABLE IF NOT EXISTS leads (
			id SERIAL PRIMARY KEY,
			name TEXT NOT NULL,
			email TEXT NOT NULL,
			phone TEXT NOT NULL,
			process TEXT NOT NULL,
			wants_guide SMALLINT NOT NULL,
			locale TEXT NOT NULL,
			created_at TEXT NOT NULL
		)
	`;

	await sql`
		INSERT INTO leads (name, email, phone, process, wants_guide, locale, created_at)
		VALUES (
			${payload.name},
			${payload.email},
			${payload.phone},
			${payload.process},
			${payload.wantsGuide ? 1 : 0},
			${payload.locale},
			${payload.submittedAt}
		)
	`;
}

export async function selectLeadsDesc(limit: number): Promise<LeadRow[]> {
	const sql = getSql();
	if (!sql) return [];

	await sql`
		CREATE TABLE IF NOT EXISTS leads (
			id SERIAL PRIMARY KEY,
			name TEXT NOT NULL,
			email TEXT NOT NULL,
			phone TEXT NOT NULL,
			process TEXT NOT NULL,
			wants_guide SMALLINT NOT NULL,
			locale TEXT NOT NULL,
			created_at TEXT NOT NULL
		)
	`;

	const rows = await sql`
		SELECT id, name, email, phone, process, wants_guide, locale, created_at
		FROM leads ORDER BY id DESC LIMIT ${limit}
	`;

	return rows.map((row) => ({
		id: Number(row.id),
		name: String(row.name),
		email: String(row.email),
		phone: String(row.phone),
		process: String(row.process),
		wants_guide: Number(row.wants_guide),
		locale: String(row.locale),
		created_at: String(row.created_at),
	}));
}

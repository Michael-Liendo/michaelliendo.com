import { createClient } from "@libsql/client";
import { env } from "$env/dynamic/private";

const CREATE_LEADS_TABLE = `
CREATE TABLE IF NOT EXISTS leads (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	email TEXT NOT NULL,
	phone TEXT NOT NULL,
	process TEXT NOT NULL,
	wants_guide INTEGER NOT NULL,
	locale TEXT NOT NULL,
	created_at TEXT NOT NULL
)`;

function getTursoClient() {
	const url = env.TURSO_DATABASE_URL?.trim();
	const authToken = env.TURSO_AUTH_TOKEN?.trim();
	if (!url || !authToken) return null;
	return createClient({ url, authToken });
}

export function isLeadsDatabaseConfigured(): boolean {
	const url = env.TURSO_DATABASE_URL?.trim();
	const authToken = env.TURSO_AUTH_TOKEN?.trim();
	return Boolean(url && authToken);
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
	const client = getTursoClient();
	if (!client) {
		throw new Error("Turso not configured");
	}

	await client.execute(CREATE_LEADS_TABLE);
	await client.execute({
		sql: `INSERT INTO leads (name, email, phone, process, wants_guide, locale, created_at)
			VALUES (?, ?, ?, ?, ?, ?, ?)`,
		args: [
			payload.name,
			payload.email,
			payload.phone,
			payload.process,
			payload.wantsGuide ? 1 : 0,
			payload.locale,
			payload.submittedAt,
		],
	});
}

export async function selectLeadsDesc(limit: number): Promise<LeadRow[]> {
	const client = getTursoClient();
	if (!client) return [];

	await client.execute(CREATE_LEADS_TABLE);
	const result = await client.execute({
		sql: `SELECT id, name, email, phone, process, wants_guide, locale, created_at
			FROM leads ORDER BY id DESC LIMIT ?`,
		args: [limit],
	});

	return result.rows.map((row) => ({
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

import { error, json } from "@sveltejs/kit";

import { env } from "$env/dynamic/private";
import { isLeadsDatabaseConfigured, selectLeadsDesc } from "$lib/server/leads-db";

import type { RequestHandler } from "./$types";

/** GET JSON list of leads. Header: Authorization: Bearer <ADMIN_LEADS_TOKEN> */
export const GET: RequestHandler = async ({ request }) => {
	const token = env.ADMIN_LEADS_TOKEN?.trim();
	if (!token) {
		throw error(503, "Leads API disabled (set ADMIN_LEADS_TOKEN)");
	}

	const auth = request.headers.get("authorization");
	if (auth !== `Bearer ${token}`) {
		throw error(401, "Unauthorized");
	}

	if (!isLeadsDatabaseConfigured()) {
		throw error(
			503,
			"Database not configured (set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN)",
		);
	}

	const leads = await selectLeadsDesc(500);
	return json({
		leads: leads.map((row) => ({
			id: row.id,
			name: row.name,
			email: row.email,
			phone: row.phone,
			process: row.process,
			wantsGuide: row.wants_guide === 1,
			locale: row.locale,
			createdAt: row.created_at,
		})),
	});
};

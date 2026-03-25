import { fail } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

import type { Locales } from "$i18n/i18n-types";
import { insertLead, isLeadsDatabaseConfigured } from "$lib/server/leads-db";
import type { Actions } from "./$types";

/** Optional: POST JSON to LEADS_WEBHOOK_URL (Zapier, Make, etc.). */
const CONTACT_EMAIL = "hello@michaelliendo.com";

function buildMailto(
	locale: Locales,
	data: {
		name: string;
		email: string;
		phone: string;
		process: string;
		wantsGuide: boolean;
	},
): string {
	const subject =
		locale === "es"
			? `Solicitud automatizaciones: ${data.name}`
			: `Automations inquiry: ${data.name}`;
	const body = [
		`Name / Nombre: ${data.name}`,
		`Email: ${data.email}`,
		`Phone / Teléfono: ${data.phone}`,
		`Wants guide / Quiere guía: ${data.wantsGuide ? "yes / sí" : "no"}`,
		"",
		"Process / Proceso:",
		data.process,
	].join("\n");
	return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const fd = await request.formData();
		const name = String(fd.get("name") ?? "").trim();
		const email = String(fd.get("email") ?? "").trim();
		const phone = String(fd.get("phone") ?? "").trim();
		const process = String(fd.get("process") ?? "").trim();
		const wantsGuide = fd.get("wantsGuide") === "on";

		if (!name || !email || !phone || !process) {
			return fail(400, { invalid: true });
		}

		const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
		if (!emailOk) {
			return fail(400, { invalid: true });
		}

		const payload = {
			name,
			email,
			phone,
			process,
			wantsGuide,
			locale: locals.locale,
			submittedAt: new Date().toISOString(),
		};

		let savedToDb = false;
		if (isLeadsDatabaseConfigured()) {
			try {
				await insertLead(payload);
				savedToDb = true;
			} catch (err) {
				console.error("[leads] insert failed", err);
				return fail(502, { storeFailed: true });
			}
		}

		const webhook = env.LEADS_WEBHOOK_URL?.trim();
		if (webhook) {
			try {
				const res = await fetch(webhook, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(payload),
				});
				if (!res.ok) {
					return fail(502, { webhookFailed: true });
				}
			} catch (err) {
				console.error("[leads] webhook failed", err);
				return fail(502, { webhookFailed: true });
			}
		}

		if (savedToDb || webhook) {
			return { success: true as const };
		}

		return {
			success: true as const,
			mailtoHref: buildMailto(locals.locale, {
				name,
				email,
				phone,
				process,
				wantsGuide,
			}),
		};
	},
};

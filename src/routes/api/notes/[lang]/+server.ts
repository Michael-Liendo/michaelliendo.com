import type { Locales } from '$i18n/i18n-types';
import { Service } from '$lib/services/index';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
  const notes = await Service.Notion.Notes.getNotes(params.lang as Locales);

  return new Response(JSON.stringify(notes), { status: 200 });
}

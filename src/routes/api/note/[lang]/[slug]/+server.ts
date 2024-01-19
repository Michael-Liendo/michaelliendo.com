import type { Locales } from '$i18n/i18n-types';
import { Service } from '$lib/services/index';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
  const note = await Service.Notion.Notes.getSingleNotes(
    params.lang as Locales,
    params.slug,
  );

  return new Response(JSON.stringify(note), { status: 200 });
}

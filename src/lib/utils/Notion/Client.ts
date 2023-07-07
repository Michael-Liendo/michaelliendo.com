import { Client } from '@notionhq/client';
import { NOTION_ACCESS_TOKEN } from '$env/static/private';

export const client = new Client({
	auth: NOTION_ACCESS_TOKEN
});

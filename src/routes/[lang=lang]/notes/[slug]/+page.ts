export const ssr = false;

export async function load({ params, fetch }) {
	try {
		const request = await fetch(`/api/note/${params.lang}/${params.slug}`);
		const post = await request.json();

		return {
			note: post.note,
			markdown: post.markdown
		};
	} catch (error) {
		const request = await fetch(`/api/note/${params.lang}/${params.slug}`);
		const post = await request.json();

		return {
			note: post.note,
			markdown: post.markdown
		};
	}
}

export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const res = await fetch(`api/notes/${params.lang}`);

	if (res.ok) {
		const notes = await res.json();

		return {
			notes
		};
	}

	return {
		notes: []
	};
}

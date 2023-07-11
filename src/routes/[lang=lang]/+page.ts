export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch('/api/notes');

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

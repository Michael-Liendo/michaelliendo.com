import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals: { locale } }) => {
	// pass locale information from "server-context" to "shared server + client context"
	return { locale };
};

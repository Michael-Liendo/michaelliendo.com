type DateStyle = Intl.DateTimeFormatOptions["dateStyle"];

export function formatDate(
	date: string,
	dateStyle: DateStyle = "medium",
	locales = "es",
) {
	const dateToFormat = new Date(date); // Pass the date directly
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
}

/** ISO calendar date (YYYY-MM-DD) for machine-readable attributes like `<time datetime>`. */
export function toIsoDate(date: string) {
	return new Date(date).toISOString().slice(0, 10);
}

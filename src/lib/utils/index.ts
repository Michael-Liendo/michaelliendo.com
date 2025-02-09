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

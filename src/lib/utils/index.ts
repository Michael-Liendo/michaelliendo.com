type DateStyle = Intl.DateTimeFormatOptions["dateStyle"];

export function formatDate(
	date: string,
	dateStyle: DateStyle = "medium",
	locales = "es",
) {
	const dateToFormat = new Date(date); // Pass the date directly
	// Note dates are calendar days parsed as UTC; format them in UTC so they don't shift a day back.
	const dateFormatter = new Intl.DateTimeFormat(locales, {
		dateStyle,
		timeZone: "UTC",
	});
	return dateFormatter.format(dateToFormat);
}

/** ISO calendar date (YYYY-MM-DD) for machine-readable attributes like `<time datetime>`. */
export function toIsoDate(date: string) {
	return new Date(date).toISOString().slice(0, 10);
}

export const formatISODate = (
	date: Date,
	options?: Intl.DateTimeFormatOptions,
) => {
	const defaultOptions: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		timeZone: "UTC",
	};

	const mergedOptions = { ...defaultOptions, ...options };

	const formattedDate = new Intl.DateTimeFormat("en-CA", mergedOptions)
		.format(date)
		.replace(/[-:]/g, "")
		.replace(" ", "T");

	return `${formattedDate}Z`;
};

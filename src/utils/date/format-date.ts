export const formatDate = (
	date: Date | string,
	options?: Intl.DateTimeFormatOptions,
) => {
	const defaultOptions: Intl.DateTimeFormatOptions = {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		timeZone: "America/Sao_Paulo",
	};

	const mergedOptions = { ...defaultOptions, ...options };

	const dateToFormat = typeof date === "string" ? new Date(date) : date;

	return new Intl.DateTimeFormat("pt-BR", mergedOptions).format(dateToFormat);
};

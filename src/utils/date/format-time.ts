export const formatTime = (
	date: Date | string,
	options?: Intl.DateTimeFormatOptions,
) => {
	const defaultOptions: Intl.DateTimeFormatOptions = {
		hour: "2-digit",
		minute: "2-digit",
		timeZone: "America/Sao_Paulo",
	};

	const mergedOptions = { ...defaultOptions, ...options };

	const dateToFormat = typeof date === "string" ? new Date(date) : date;

	return new Intl.DateTimeFormat("pt-BR", mergedOptions).format(dateToFormat);
};

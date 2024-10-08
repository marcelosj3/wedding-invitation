export const formatDateTime = (date: Date, options?: Intl.DateTimeFormatOptions) => {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Sao_Paulo'
  };

  const mergedOptions = { ...defaultOptions, ...options };

  return new Intl.DateTimeFormat('pt-BR', mergedOptions).format(date);
};


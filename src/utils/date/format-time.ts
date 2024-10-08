export const formatTime = (date: Date, options?: Intl.DateTimeFormatOptions) => {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Sao_Paulo'
  };

  const mergedOptions = { ...defaultOptions, ...options };

  return new Intl.DateTimeFormat('pt-BR', mergedOptions).format(date);
};
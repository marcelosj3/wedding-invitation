type Args = {
	startDate: string;
	endDate: string;
	name: string;
	location: string;
	description: string;
};

const formatDateForGoogleCalendar = (dateStr: string) => {
	const date = new Date(dateStr);
	return `${date.toISOString().replace(/[-:.]/g, "").slice(0, 15)}Z`;
};

export const generateGoogleCalendarUrl = ({
	startDate,
	endDate,
	name,
	location,
	description,
}: Args) => {
	const encodedName = encodeURIComponent(name);
	const encodedLocation = encodeURIComponent(location);
	const encodedDescription = encodeURIComponent(description);

	const formattedStartDate = formatDateForGoogleCalendar(startDate);
	const formattedEndDate = formatDateForGoogleCalendar(endDate);

	return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodedName}&dates=${formattedStartDate}/${formattedEndDate}&location=${encodedLocation}&details=${encodedDescription}`;
};

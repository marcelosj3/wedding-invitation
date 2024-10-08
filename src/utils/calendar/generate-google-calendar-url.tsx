type Args = {
	startDate: string;
	endDate: string;
	name: string;
	location: string;
	description: string;
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

	const formattedStartDate = startDate.replace(/:/g, '');
	const formattedEndDate = endDate.replace(/:/g, '');

	return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodedName}&dates=${formattedStartDate}/${formattedEndDate}&location=${encodedLocation}&details=${encodedDescription}`;
};

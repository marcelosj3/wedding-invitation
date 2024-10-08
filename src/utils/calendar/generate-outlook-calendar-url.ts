type Args = {
	startDate: string;
	endDate: string;
	name: string;
	location: string;
	description: string;
};

export const generateOutlookCalendarUrl = ({
	startDate,
	endDate,
	name,
	location,
	description,
}: Args) => {
	const encodedName = encodeURIComponent(name);
	const encodedLocation = encodeURIComponent(location);
	const encodedDescription = encodeURIComponent(description);

	const formattedStartDate = startDate.replace(/:/g, "");
	const formattedEndDate = endDate.replace(/:/g, "");

	return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodedName}&startdt=${formattedStartDate}&enddt=${formattedEndDate}&body=${encodedDescription}&location=${encodedLocation}`;
};

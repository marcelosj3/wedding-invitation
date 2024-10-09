type Args = {
	startDate: string;
	endDate: string;
	name: string;
	location: string;
	description: string;
};

const formatDateForApple = (dateStr: string) => {
	const date = new Date(dateStr);
	const year = date.getUTCFullYear();
	const month = String(date.getUTCMonth() + 1).padStart(2, "0");
	const day = String(date.getUTCDate()).padStart(2, "0");
	const hours = String(date.getUTCHours()).padStart(2, "0");
	const minutes = String(date.getUTCMinutes()).padStart(2, "0");
	const seconds = String(date.getUTCSeconds()).padStart(2, "0");

	return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
};

export const generateAppleCalendarUrl = ({
	startDate,
	endDate,
	name,
	location,
	description,
}: Args) => {
	const encodedName = encodeURIComponent(name);
	const encodedLocation = encodeURIComponent(location);
	const encodedDescription = encodeURIComponent(description);

	const formattedStartDate = formatDateForApple(startDate);
	const formattedEndDate = formatDateForApple(endDate);

	return `data:text/calendar;charset=utf8,BEGIN:VCALENDAR
					VERSION:2.0
					BEGIN:VEVENT
					URL:${encodedLocation}
					DTSTART:${formattedStartDate}
					DTEND:${formattedEndDate}
					SUMMARY:${encodedName}
					DESCRIPTION:${encodedDescription}
					LOCATION:${encodedLocation}
					END:VEVENT
					END:VCALENDAR`;
};

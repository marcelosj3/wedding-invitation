type Args = {
	startDate: string;
	endDate: string;
	name: string;
	location: string;
	description: string;
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

	const formattedStartDate = startDate.replace(/:/g, '');
	const formattedEndDate = endDate.replace(/:/g, '');

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

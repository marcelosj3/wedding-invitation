type Args = {
	startDate: string;
	endDate: string;
	name: string;
	location: string;
	description: string;
};

const formatDateForOutlook = (dateStr: string) => {
	const date = new Date(dateStr);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	const timezoneOffset = -date.getTimezoneOffset();
	const offsetHours = String(
		Math.floor(Math.abs(timezoneOffset) / 60),
	).padStart(2, "0");
	const offsetMinutes = String(Math.abs(timezoneOffset) % 60).padStart(2, "0");
	const offsetSign = timezoneOffset >= 0 ? "+" : "-";

	return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${offsetSign}${offsetHours}:${offsetMinutes}`;
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

	const formattedStartDate = formatDateForOutlook(startDate);
	const formattedEndDate = formatDateForOutlook(endDate);

	return `https://outlook.office.com/calendar/0/deeplink/compose?subject=${encodedName}&body=${encodedDescription}&startdt=${formattedStartDate}&enddt=${formattedEndDate}&location=${encodedLocation}&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent`;
};

import { formatISODate } from "../date/format-iso-date";

type Args = {
  startDate: Date;
  endDate: Date;
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
  const startDateTime = formatISODate(startDate);
  const endDateTime = formatISODate(endDate);
  const encodedName = encodeURIComponent(name);
  const encodedLocation = encodeURIComponent(location);
  const encodedDescription = encodeURIComponent(description);

  return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodedName}&startdt=${startDateTime}&enddt=${endDateTime}&body=${encodedDescription}&location=${encodedLocation}`;
};
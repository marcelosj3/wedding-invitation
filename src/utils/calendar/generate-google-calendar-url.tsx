import { formatISODate } from "../date/format-iso-date";

type Args = {
  startDate: Date;
  endDate: Date;
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
  const startDateTime = formatISODate(startDate);
  const endDateTime = formatISODate(endDate);
  const encodedName = encodeURIComponent(name);
  const encodedLocation = encodeURIComponent(location);
  const encodedDescription = encodeURIComponent(description);

  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodedName}&dates=${startDateTime}/${endDateTime}&location=${encodedLocation}&details=${encodedDescription}`;
};

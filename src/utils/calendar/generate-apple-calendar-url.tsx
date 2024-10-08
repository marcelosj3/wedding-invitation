import { formatISODate } from "../date/format-iso-date";

type Args = {
  startDate: Date;
  endDate: Date;
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
  const startDateTime = formatISODate(startDate);
  const endDateTime = formatISODate(endDate);
  const encodedName = encodeURIComponent(name);
  const encodedLocation = encodeURIComponent(location);
  const encodedDescription = encodeURIComponent(description);

  return `data:text/calendar;charset=utf8,BEGIN:VCALENDAR
          VERSION:2.0
          BEGIN:VEVENT
          URL:${encodedLocation}
          DTSTART:${startDateTime}
          DTEND:${endDateTime}
          SUMMARY:${encodedName}
          DESCRIPTION:${encodedDescription}
          LOCATION:${encodedLocation}
          END:VEVENT
          END:VCALENDAR`;
};

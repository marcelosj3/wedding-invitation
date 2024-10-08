import { Map, Marker } from "@vis.gl/react-google-maps";
import { AddToCalendarButton } from "../../components/add-to-calendar-button";
import { Card } from "../../components/card";
import { Icon } from "../../components/icon";
import { formatDate } from "../../utils/date/format-date";
import { formatDateTime } from "../../utils/date/format-date-time";
import { formatTime } from "../../utils/date/format-time";

type Props = {
  details: {
    cardTitle: string;
    cardBackgroundImageHref: string;
    venue: {
      name: string;
      address: string;
      latitude: number;
      longitude: number;
    };
    eventSchedule: {
      startDate: Date;
      endDate: Date;
      description: string;
    };
  };
};

export const PlaceCard = ({ details }: Props) => {
  return (
    <Card
      key={details.cardTitle}
      title={details.cardTitle}
      backgroundImageHref={details.cardBackgroundImageHref}
    >
      <div className="flex items-center">
        <Icon name="MapPinAreaBold" className="mr-2 text-gray-200" />
        <p className="text-gray-200">{details.venue.name}</p>
      </div>
      <div className="flex items-center">
        <Icon name="CalendarBold" className="mr-2 text-gray-200" />
        <p className="text-gray-200">{formatDate(details.eventSchedule.startDate)}</p>
      </div>
      <div className="flex items-center">
        <Icon name="ClockBold" className="mr-2 text-gray-200" />
        <p className="text-gray-200">{formatTime(details.eventSchedule.startDate)}</p>
      </div>

      <div className="w-full h-[175px] bg-gray-300 rounded-md">
        <Map
          defaultCenter={{ lat: details.venue.latitude, lng: details.venue.longitude }}
          defaultZoom={15}
        >
          <Marker
            position={{ lat: details.venue.latitude, lng: details.venue.longitude }}
            onClick={() => {
              const url = `https://www.google.com/maps/search/?api=1&query=${details.venue.latitude},${details.venue.longitude}`;
              window.open(url, '_blank');
            }}
          />
        </Map>
      </div>

      <AddToCalendarButton
        name={`Karina e Marcelo - ${details.venue.name} - ${details.cardTitle}`}
        startDate={formatDateTime(details.eventSchedule.startDate)}
        endDate={formatDateTime(details.eventSchedule.endDate)}
        startTime={formatTime(details.eventSchedule.startDate)}
        endTime={formatTime(details.eventSchedule.endDate)}
        timeZone="America/Sao_Paulo"
        location={details.venue.address}
        description={details.eventSchedule.description}
      />
    </Card>
  );
};

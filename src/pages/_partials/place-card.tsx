import { Map as GoogleMap, Marker } from "@vis.gl/react-google-maps";
import { Card } from "../../components/card";
import { Icon } from "../../components/icon";
import { formatDate } from "../../utils/date/format-date";
import { formatTime } from "../../utils/date/format-time";
import { AddToCalendarButtonsContainer } from "./add-to-calendar-buttons-container";

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
			startDate: string;
			endDate: string;
			description: string;
		};
	};
};

export const PlaceCard = ({ details }: Props) => {
	const openMapRouteOnClick = () => {
		const url = `https://www.google.com/maps/search/?api=1&query=${details.venue.latitude},${details.venue.longitude}`;
		window.open(url, "_blank");
	};

	return (
		<Card
			key={details.cardTitle}
			title={details.cardTitle}
			backgroundImageHref={details.cardBackgroundImageHref}
		>
			<div className="flex items-center">
				<Icon name="MapPinAreaBold" className="mr-2 text-gray-900" />
				<p className="text-gray-900">{details.venue.name}</p>
			</div>
			<div className="flex items-center">
				<Icon name="CalendarBold" className="mr-2 text-gray-900" />
				<p className="text-gray-900">
					{formatDate(new Date(details.eventSchedule.startDate))}
				</p>
			</div>
			<div className="flex items-center">
				<Icon name="ClockBold" className="mr-2 text-gray-900" />
				<p className="text-gray-900">
					{formatTime(details.eventSchedule.startDate)}
				</p>
			</div>

			<div className="h-[175px] w-full rounded-md bg-gray-300">
				<GoogleMap
					defaultCenter={{
						lat: details.venue.latitude,
						lng: details.venue.longitude,
					}}
					defaultZoom={15}
					onClick={openMapRouteOnClick}
				>
					<Marker
						position={{
							lat: details.venue.latitude,
							lng: details.venue.longitude,
						}}
						onClick={openMapRouteOnClick}
					/>
				</GoogleMap>
			</div>

			<AddToCalendarButtonsContainer
				name={`Karina e Marcelo - ${details.venue.name} - ${details.cardTitle}`}
				startDate={details.eventSchedule.startDate}
				endDate={details.eventSchedule.endDate}
				location={details.venue.address}
				description={details.eventSchedule.description}
			/>
		</Card>
	);
};

import { Button } from "../../components/button";
import { Icon } from "../../components/icon";
import { generateAppleCalendarUrl } from "../../utils/calendar/generate-apple-calendar-url";
import { generateGoogleCalendarUrl } from "../../utils/calendar/generate-google-calendar-url";
import { generateOutlookCalendarUrl } from "../../utils/calendar/generate-outlook-calendar-url";

type Props = {
	name: string;
	startDate: string;
	endDate: string;
	location: string;
	description: string;
};

export const AddToCalendarButtonsContainer = ({
	name,
	startDate,
	endDate,
	location,
	description,
}: Props) => {
	const handleAddToCalendar = (
		calendarType: "google" | "apple" | "outlook",
	) => {
		const calendarUrlArgs = {
			startDate,
			endDate,
			name,
			location,
			description,
		};

		const generateUrl = {
			google: generateGoogleCalendarUrl,
			apple: generateAppleCalendarUrl,
			outlook: generateOutlookCalendarUrl,
		};

		try {
			const url = generateUrl[calendarType](calendarUrlArgs);
			if (url) {
				window.open(url, "_blank", "noopener,noreferrer");
			} else {
				console.error(`Failed to generate URL for ${calendarType} calendar`);
			}
		} catch (error) {
			console.error(
				`Error generating URL for ${calendarType} calendar:`,
				error,
			);
		}
	};

	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center">
				<Icon name="CalendarPlusBold" className="mr-2 text-gray-900" />
				<p className="text-gray-900">Adicionar à agenda</p>
			</div>

			<div className="flex flex-1 flex-col flex-wrap gap-2 min-[360px]:flex-row">
				<Button
					onClick={() => handleAddToCalendar("google")}
					onTouchStart={() => handleAddToCalendar("google")}
					role="menuitem"
					type="button"
					size="sm"
					className="flex-1"
					iconName="GoogleLogoBold"
				>
					Google
				</Button>

				<Button
					onClick={() => handleAddToCalendar("apple")}
					onTouchStart={() => handleAddToCalendar("apple")}
					role="menuitem"
					type="button"
					size="sm"
					className="flex-1"
					iconName="AppleLogoFill"
				>
					Apple
				</Button>

				<Button
					onClick={() => handleAddToCalendar("outlook")}
					onTouchStart={() => handleAddToCalendar("outlook")}
					role="menuitem"
					type="button"
					size="sm"
					className="flex-1"
					iconName="MicrosoftOutlookLogoFill"
				>
					Outlook
				</Button>
			</div>
		</div>
	);
};

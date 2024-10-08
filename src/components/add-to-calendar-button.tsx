import type React from "react";
import { useEffect, useRef, useState } from "react";
import { generateAppleCalendarUrl } from "../utils/calendar/generate-apple-calendar-url";
import { generateGoogleCalendarUrl } from "../utils/calendar/generate-google-calendar-url";
import { generateOutlookCalendarUrl } from "../utils/calendar/generate-outlook-calendar-url";
import { Button } from "./button";
import { Icon } from "./icon";

interface AddToCalendarButtonProps {
	name: string;
	startDate: string;
	endDate: string;
	startTime: string;
	endTime: string;
	timeZone: string;
	location: string;
	description: string;
}

export const AddToCalendarButton: React.FC<AddToCalendarButtonProps> = ({
	name,
	startDate,
	endDate,
	startTime,
	endTime,
	timeZone,
	location,
	description,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleAddToCalendar = (
		calendarType: "google" | "apple" | "outlook",
	) => {
		const calendarUrlArgs = {
			startDate: `${startDate}T${startTime}:00${timeZone}`,
			endDate: `${endDate}T${endTime}:00${timeZone}`,
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
				setIsOpen(false);
			} else {
				console.error(`Failed to generate URL for ${calendarType} calendar`);
			}
		} catch (error) {
			console.error(`Error generating URL for ${calendarType} calendar:`, error);
		}
	};

	return (
		<div className="relative" ref={dropdownRef}>
			{isOpen && (
				<div className="absolute bottom-full z-10 mb-2 w-full rounded-md bg-white shadow-lg">
					<div
						className="py-1"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="options-menu"
					>
						<button
							onClick={() => handleAddToCalendar("google")}
							onTouchStart={() => handleAddToCalendar("google")}
							className="flex w-full items-center px-4 py-2 text-gray-350 text-sm hover:bg-gray-100 hover:text-gray-900"
							role="menuitem"
							type="button"
						>
							<Icon name="GoogleLogoBold" className="mr-2 h-5 w-5" />
							Google Calendar
						</button>
						<button
							onClick={() => handleAddToCalendar("apple")}
							onTouchStart={() => handleAddToCalendar("apple")}
							className="flex w-full items-center px-4 py-2 text-gray-350 text-sm hover:bg-gray-100 hover:text-gray-900"
							role="menuitem"
							type="button"
						>
							<Icon name="AppleLogoFill" className="mr-2 h-5 w-5" />
							Apple Calendar
						</button>
						<button
							onClick={() => handleAddToCalendar("outlook")}
							onTouchStart={() => handleAddToCalendar("outlook")}
							className="flex w-full items-center px-4 py-2 text-gray-350 text-sm hover:bg-gray-100 hover:text-gray-900"
							role="menuitem"
							type="button"
						>
							<Icon name="MicrosoftOutlookLogoFill" className="mr-2 h-5 w-5" />
							Outlook Calendar
						</button>
					</div>
				</div>
			)}

			<Button
				onClick={() => setIsOpen(!isOpen)}
				buttonText="Adicionar à agenda"
				className="w-full"
				iconName="CalendarPlusBold"
			/>
		</div>
	);
};

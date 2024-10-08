import React, { useEffect, useRef, useState } from "react";
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
			startDate: new Date(`${startDate}T${startTime}Z`),
			endDate: new Date(`${endDate}T${endTime}Z`),
			name,
			location,
			description,
		};

		let url;
		switch (calendarType) {
			case "google":
				url = generateGoogleCalendarUrl(calendarUrlArgs);
				break;
			case "apple":
				url = generateAppleCalendarUrl(calendarUrlArgs);
				break;
			case "outlook":
				url = generateOutlookCalendarUrl(calendarUrlArgs);
				break;
		}
		window.open(url, "_blank");
		setIsOpen(false);
	};

	return (
		<div className="relative" ref={dropdownRef}>
			{isOpen && (
				<div className="absolute z-10 w-full bottom-full mb-2 bg-white rounded-md shadow-lg">
					<div
						className="py-1"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="options-menu"
					>
						<button
							onClick={() => handleAddToCalendar("google")}
							className="flex items-center w-full px-4 py-2 text-sm text-gray-350 hover:bg-gray-100 hover:text-gray-900"
							role="menuitem"
						>
							<Icon name="GoogleLogoBold" className="w-5 h-5 mr-2" />
							Google Calendar
						</button>
						<button
							onClick={() => handleAddToCalendar("apple")}
							className="flex items-center w-full px-4 py-2 text-sm text-gray-350 hover:bg-gray-100 hover:text-gray-900"
							role="menuitem"
						>
							<Icon name="AppleLogoFill" className="w-5 h-5 mr-2" />
							Apple Calendar
						</button>
						<button
							onClick={() => handleAddToCalendar("outlook")}
							className="flex items-center w-full px-4 py-2 text-sm text-gray-350 hover:bg-gray-100 hover:text-gray-900"
							role="menuitem"
						>
							<Icon name="MicrosoftOutlookLogoFill" className="w-5 h-5 mr-2" />
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

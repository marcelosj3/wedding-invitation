import type React from "react";
import { cn } from "../utils/style/cn";
import { Icon, type IconName } from "./icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	href?: string;
	onClick?: () => void;
	className?: string;
	size?: "sm" | "md" | "lg";
	iconName?: IconName;
}

export const Button: React.FC<ButtonProps> = ({
	href,
	onClick,
	className,
	size = "md",
	iconName,
	children,
	...props
}) => {
	const sizeClasses = {
		sm: "px-2 py-1 text-sm",
		md: "px-4 py-2",
		lg: "px-6 py-3 text-lg",
	};

	const baseClassName = cn(
		"inline-flex items-center justify-center rounded-md text-white transition-colors duration-300",
		sizeClasses[size],
		"bg-green-800 hover:bg-green-600",
		className,
	);

	const content = (
		<>
			{iconName && <Icon name={iconName} className="mr-2" />}
			{children}
		</>
	);

	if (href) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={baseClassName}
			>
				{content}
			</a>
		);
	}

	return (
		<button onClick={onClick} className={baseClassName} {...props}>
			{content}
		</button>
	);
};

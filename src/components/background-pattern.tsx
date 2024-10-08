type Props = {
	children: React.ReactNode;
	url: string;
};

export const BackgroundPattern = ({ children, url }: Props) => {
	return (
		<div className="relative min-h-screen overflow-hidden">
			<div
				className="absolute top-0 left-0 h-full w-full"
				style={{
					backgroundImage: `url(${url})`,
					backgroundSize: "auto",
					backgroundPosition: "center",
				}}
			/>
			{children}
		</div>
	);
};

type Props = {
	children: React.ReactNode;
	url: string;
};

export const BackgroundPattern = ({ children, url }: Props) => {
	return (
		<div className="min-h-screen relative overflow-hidden">
			<div
				className="absolute top-0 left-0 w-full h-full"
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

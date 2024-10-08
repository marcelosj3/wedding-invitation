type Props = {
	title: string;
	children: React.ReactNode;
	backgroundImageHref?: string;
};

export const Card = ({ title, children, backgroundImageHref }: Props) => {
	return (
		<div className="bg-green-350 rounded-md relative overflow-hidden">
			{backgroundImageHref && (
				<div className="absolute z-10 -right-12 -top-4 pointer-events-none h-full">
					<img
						src={backgroundImageHref}
						alt={title}
						className="w-full opacity-20 h-full"
					/>
				</div>
			)}

			<section className="flex flex-col p-2 bg-green-350 rounded-md gap-2 opacity-100 h-full z-20">
				<h2 className="text-2xl font-bold mb-2 text-gray-200">{title}</h2>
				{children}
			</section>
		</div>
	);
};

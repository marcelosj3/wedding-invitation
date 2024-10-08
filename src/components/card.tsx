type Props = {
	title: string;
	children: React.ReactNode;
	backgroundImageHref?: string;
};

export const Card = ({ title, children, backgroundImageHref }: Props) => {
	return (
		<div className="relative overflow-hidden rounded-md bg-green-350">
			{backgroundImageHref && (
				<div className="-right-12 -top-4 pointer-events-none absolute z-10 h-full">
					<img
						src={backgroundImageHref}
						alt={title}
						className="h-full w-full opacity-20"
					/>
				</div>
			)}

			<section className="z-20 flex h-full flex-col gap-2 rounded-md bg-green-350 p-2 opacity-100">
				<h2 className="mb-2 font-bold text-2xl text-gray-200">{title}</h2>
				{children}
			</section>
		</div>
	);
};

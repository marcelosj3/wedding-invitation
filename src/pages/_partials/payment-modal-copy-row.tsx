import { Button } from "../../components/button";
import { Icon } from "../../components/icon";
import { useToast } from "../../hooks/use-toast";

type Props = {
	title: string;
	value: string;
	toastInfo: {
		title: string;
		description: string;
	};
};

export const PaymentModalCopyRow = ({ title, value, toastInfo }: Props) => {
	const { toast } = useToast();

	return (
		<div className="mb-2 flex w-full justify-between">
			<div className="mb-2 flex w-full items-center justify-between gap-2">
				<p className="font-semibold">{title}:</p>
				<Button
					className="flex items-center gap-2 bg-transparent p-0 text-black hover:bg-transparent"
					onClick={() => {
						navigator.clipboard.writeText(value);
						toast({
							title: toastInfo.title,
							description: toastInfo.description,
							variant: "default",
							duration: 3000,
						});
					}}
				>
					<span>{value}</span>
					<Icon name="CopyBold" />
				</Button>
			</div>
		</div>
	);
};

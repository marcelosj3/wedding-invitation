import { useState } from "react";
import { PixQRCode } from "../../assets";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";
import { useToast } from "../../hooks/use-toast";
import { environment } from "../../utils/environment";
import { PaymentModalCopyRow } from "./payment-modal-copy-row";

export const PaymentModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { toast } = useToast();

	const paymentDetails = [
		{
			title: "Chave Pix",
			value: environment.PAYMENT_PIX_KEY,
			toastInfo: {
				title: "Chave Pix copiada",
				description: "A chave Pix foi copiada para a área de transferência.",
			},
		},
		{
			title: "Nome",
			value: environment.PAYMENT_NAME,
			toastInfo: {
				title: "Nome copiado",
				description: "O nome foi copiado para a área de transferência.",
			},
		},
		{
			title: "Banco",
			value: environment.PAYMENT_BANK_NAME,
			toastInfo: {
				title: "Nome do banco copiado",
				description:
					"O nome do banco foi copiado para a área de transferência.",
			},
		},
		{
			title: "Código",
			value: environment.PAYMENT_BANK_CODE,
			toastInfo: {
				title: "Código do banco copiado",
				description:
					"O código do banco foi copiado para a área de transferência.",
			},
		},
		{
			title: "Agência",
			value: environment.PAYMENT_AGENCY,
			toastInfo: {
				title: "Número da agência copiado",
				description:
					"O número da agência foi copiado para a área de transferência.",
			},
		},
		{
			title: "Conta",
			value: environment.PAYMENT_ACCOUNT,
			toastInfo: {
				title: "Número da conta copiado",
				description:
					"O número da conta foi copiado para a área de transferência.",
			},
		},
	];

	return (
		<>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Pagamento">
				<div className="flex flex-col items-center">
					<h3 className="mb-4 font-bold text-xl">Transferência via Pix</h3>

					<div className="mb-4 h-48 w-48 bg-gray-200">
						<img src={PixQRCode} alt="Pix QR Code" />
					</div>

					<Button
						className="mb-4"
						onClick={() => {
							navigator.clipboard.writeText(environment.PAYMENT_PIX_KEY);
							toast({
								title: "Chave Pix copiada",
								description:
									"A chave Pix foi copiada para a área de transferência.",
								variant: "default",
								duration: 3000,
							});
						}}
					>
						Copiar chave Pix
					</Button>

					<div className="flex w-full max-w-sm flex-col items-start">
						{paymentDetails.map((detail) => (
							<PaymentModalCopyRow key={detail.title} {...detail} />
						))}
					</div>
				</div>
			</Modal>

			<Button
				onClick={() => setIsOpen(true)}
				className="w-full"
				iconName="GiftBold"
			>
				Presentear
			</Button>
		</>
	);
};

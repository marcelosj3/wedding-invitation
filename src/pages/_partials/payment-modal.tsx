import { useState } from "react";
import { default as PixQRCode } from "../../assets/pix-qr-code.png";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";
import { useToast } from "../../hooks/use-toast";
import { environment } from "../../utils/environment";

export const PaymentModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { toast } = useToast();

	return (
		<>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Pagamento">
				<div className="flex flex-col items-center">
					<h3 className="mb-4 font-bold text-xl">Transferência via Pix</h3>

					<div className="mb-4 h-48 w-48 bg-gray-200">
						<img src={PixQRCode} alt="Pix QR Code" />
					</div>

					<Button
						buttonText="Copiar chave Pix"
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
					/>

					<div className="flex w-full max-w-sm flex-col items-start">
						<div className="mb-2 flex w-full justify-between">
							<span className="font-semibold">Chave Pix:</span>
							<span id="copy-alias">{environment.PAYMENT_PIX_KEY}</span>
						</div>
						<div className="mb-2 flex w-full justify-between">
							<span className="font-semibold">Nome:</span>
							<span>{environment.PAYMENT_NAME}</span>
						</div>
						<div className="mb-2 flex w-full justify-between">
							<span className="font-semibold">Banco:</span>
							<span>{environment.PAYMENT_BANK_NAME}</span>
						</div>
						<div className="mb-2 flex w-full justify-between">
							<span className="font-semibold">Agência:</span>
							<span>{environment.PAYMENT_AGENCY}</span>
						</div>
						<div className="mb-2 flex w-full justify-between">
							<span className="font-semibold">Conta:</span>
							<span>{environment.PAYMENT_ACCOUNT}</span>
						</div>
					</div>
				</div>
			</Modal>

			<Button
				onClick={() => setIsOpen(true)}
				buttonText="Presentear"
				className="w-full"
				iconName="GiftBold"
			/>
		</>
	);
};

import { default as GiftBox } from "../assets/gift-box.svg";
import { default as BackgroundPatternUrl } from "../assets/leaves.webp";
import { default as Logo } from "../assets/logo.svg";
import { default as Rings } from "../assets/rings.svg";
import { BackgroundPattern } from "../components/background-pattern";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { PaymentModal } from "./_partials/payment-modal";
import { PlaceCard } from "./_partials/place-card";
import { weddingDetails } from "./wedding-event-details";

export const Home = () => {
	return (
		<div className="text-gray-650 font-serif">
			<BackgroundPattern url={BackgroundPatternUrl}>
				<div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
					<header className="text-center mb-8">
						<h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-650">
							Marcelo & Karina
						</h1>
						<p className="text-xl md:text-2xl text-gray-650">
							Convidam você para celebrar o nosso casamento
						</p>
						<div className="flex items-center justify-center">
							<img src={Logo} alt="Logo" className="max-w-40" />
						</div>
					</header>

					<section className="grid md:grid-cols-2 gap-4">
						{weddingDetails.events.map((details) => (
							<PlaceCard key={details.cardTitle} details={details} />
						))}

						<Card title="Confirme sua presença" backgroundImageHref={Rings}>
							<div className="flex-1 flex flex-col justify-between gap-2">
								<p className="text-gray-200">
									Sua presença é muito importante para nós! Por favor, confirme
									até 01 de Novembro para que possamos preparar tudo com
									carinho.
								</p>

								<Button
									buttonText="Confirmar presença"
									iconName="WhatsappLogoBold"
									className="w-full"
									onClick={() =>
										window.open(weddingDetails.whatsapp.groupLink, "_blank")
									}
								/>
							</div>
						</Card>

						<Card title="Presente" backgroundImageHref={GiftBox}>
							<div className="flex-1 flex flex-col justify-between gap-2">
								<p className="text-gray-200">
									Sua presença é o nosso maior presente! Mas se desejar nos
									ajudar com nossa lua de mel, ficaremos muito gratos. Qualquer
									contribuição é opcional e bem-vinda.
								</p>

								<PaymentModal />
							</div>
						</Card>
					</section>
				</div>
			</BackgroundPattern>
		</div>
	);
};

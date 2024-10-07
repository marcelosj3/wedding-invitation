import { default as Church } from "../assets/church.svg";
import { default as GiftBox } from "../assets/gift-box.svg";
import { default as Glasses } from "../assets/glasses.svg";
import { default as BackgroundPattern } from "../assets/leaves.webp";
import { default as Logo } from "../assets/logo.svg";
import { default as Rings } from "../assets/rings.svg";
import { Card } from "../components/card";
import { Icon } from "../components/icon";

export const Home = () => {

  const ceremonyPlace = {
    title: "Cerimônia",
    name: "Chapel of the Holy Spirit",
    address: "Rua das Flores, 123, Centro, São Paulo, SP, Brasil",
    date: "2024-05-15",
    time: "14:00",
    backgroundImageHref: Church
  }

  const receptionPlace = {
    title: "Recepção",
    name: "Party Venue",
    address: "Rua das Flores, 123, Centro, São Paulo, SP, Brasil",
    date: "2024-05-15",
    time: "14:00",
    backgroundImageHref: Glasses
  }


  const places = [ceremonyPlace, receptionPlace];

  return (
    <div className="min-h-screen bg-rose-50 text-gray-650 font-serif relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-red-500" style={{
        backgroundImage: `url(${BackgroundPattern})`,
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}>

      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">

        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-650">Marcelo & Karina</h1>
          <p className="text-xl md:text-2xl text-gray-650">Convidam você para celebrar o nosso casamento</p>
          <div className="flex items-center justify-center">
            <img src={Logo} alt="Logo" className="max-w-40" />
          </div>
        </header>

        <section className="grid md:grid-cols-2 gap-4">
          {places.map((place) => (
            <Card key={place.title} title={place.title} backgroundImageHref={place.backgroundImageHref}>

              <div className="flex items-center mb-2">
                <Icon name="MapPin" className="mr-2 text-gray-200" />
                <p className="text-gray-200">{place.name}</p>
              </div>
              <div className="flex items-center mb-2">
                <Icon name="Calendar" className="mr-2 text-gray-200" />
                <p className="text-gray-200">{place.date}</p>
              </div>
              <div className="flex items-center mb-2">
                <Icon name="Clock" className="mr-2 text-gray-200" />
                <p className="text-gray-200">{place.time}</p>
              </div>
              <div className="w-full h-[100px] bg-gray-300 rounded-md"></div>
            </Card>

          ))}

          <Card title="Confirme sua presença" backgroundImageHref={Rings}>
            <p className="text-gray-200">Sua presença é muito importante para nós! Por favor, confirme até 01 de Novembro
              para que possamos preparar tudo com carinho.
            </p>

            <button className="bg-green-500 text-white p-2 rounded-md">Whatsapp Button</button>
          </Card>


          <Card title="Presente" backgroundImageHref={GiftBox}>
            <p className="text-gray-200">Sua presença é o nosso maior presente! Mas se desejar nos ajudar com nossa lua de mel, ficaremos muito gratos. Qualquer contribuição é opcional e bem-vinda.</p>
            <button className="p-2 rounded-md text-gray-200">Ajude a cerimônia</button>
          </Card>

        </section>
      </div>
    </div>
  );
};

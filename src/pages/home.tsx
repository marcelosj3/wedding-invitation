import { Card } from "../components/card";

export const Home = () => {

  const ceremonyPlace = {
    title: "Cerimônia",
    name: "Chapel of the Holy Spirit",
    address: "Rua das Flores, 123, Centro, São Paulo, SP, Brasil",
    date: "2024-05-15",
    time: "14:00",
  }

  const receptionPlace = {
    title: "Recepção",
    name: "Party Venue",
    address: "Rua das Flores, 123, Centro, São Paulo, SP, Brasil",
    date: "2024-05-15",
    time: "14:00",
  }


  const places = [ceremonyPlace, receptionPlace];

  return (
    <div className="min-h-screen bg-rose-50 text-gray-800 font-serif relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">

        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Marcelo & Karina</h1>
          <p className="text-xl md:text-2xl">Convidam você para celebrar o nosso casamento</p>
        </header>

        <section className="grid md:grid-cols-2 gap-4">
          {places.map((place) => (
            <Card key={place.name} title={place.title}>
              <p>{place.name}</p>
              <p>{place.address}</p>
              <p>{place.date}</p>
              <p>{place.time}</p>
              <div className="w-full h-[100px] bg-gray-300 rounded-md"></div>
            </Card>

          ))}

          <Card title="Confirme sua presença">
            <p>Sua presença é muito importante para nós! Por favor, confirme até 01 de Novembro
              para que possamos preparar tudo com carinho.
            </p>

            <button className="bg-green-500 text-white p-2 rounded-md">Whatsapp Button</button>
          </Card>


          <Card title="Presente">
            <p>Sua presença é o nosso maior presente! Mas se desejar nos ajudar com nossa lua de mel, ficaremos muito gratos. Qualquer contribuição é opcional e bem-vinda.</p>
            <button className=" p-2 rounded-md">Ajude a cerimônia</button>
          </Card>

        </section>
      </div>
    </div>
  );
};

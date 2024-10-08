import { default as ChurchIcon } from "../assets/church.svg";
import { default as GlassesIcon } from "../assets/glasses.svg";
import { environment } from "../utils/environment";

const weddingCeremonyDetails = {
  cardTitle: "Cerimônia",
  cardBackgroundImageHref: ChurchIcon,
  venue: {
    name: "Comunidade São Luís Gonzaga",
    address: "Comunidade São Luís Gonzaga, R. João Franzner, 230 - São Luís, Jaraguá do Sul - SC, 89253-640",
    latitude: -26.505597064438458,
    longitude: -49.10931434473627,
  },
  eventSchedule: {
    startDate: new Date("2024-11-09T15:00:00-03:00"),
    endDate: new Date("2024-11-09T18:00:00-03:00"),
    description: "Junte-se a nós para celebrar a cerimônia de casamento de Marcelo e Karina! Local: Comunidade São Luís Gonzaga. Sua presença tornará este momento ainda mais especial."
  }
};

const weddingReceptionDetails = {
  cardTitle: "Recepção",
  cardBackgroundImageHref: GlassesIcon,
  venue: {
    name: "Sociedade Desportos Acaraí",
    address: "Sociedade Desportos Acaraí, R. João Manoel Lopes Braga, 315 - Jaraguá Esquerdo, Jaraguá do Sul - SC, 89253-200",
    latitude: -26.49798654512508,
    longitude: -49.092995129396556,
  },
  eventSchedule: {
    startDate: new Date("2024-11-09T19:00:00-03:00"),
    endDate: new Date("2024-11-10T05:00:00-03:00"),
    description: "Junte-se a nós para celebrar a recepção de casamento de Marcelo e Karina! Local: Sociedade Desportos Acaraí. Sua presença tornará este momento ainda mais especial."
  },
};

const weddingWhatsAppDetails = {
  groupLink: environment.WHATSAPP_GROUP_LINK,
}

const weddingPaymentDetails = {
  name: environment.PAYMENT_NAME,
  bank: {
    name: environment.PAYMENT_BANK_NAME,
    code: environment.PAYMENT_BANK_CODE,
    agency: environment.PAYMENT_AGENCY,
    account: environment.PAYMENT_ACCOUNT,
    pixKey: environment.PAYMENT_PIX_KEY
  },
}

export const weddingDetails = {whatsapp: weddingWhatsAppDetails, events: [weddingCeremonyDetails, weddingReceptionDetails], payment: weddingPaymentDetails };

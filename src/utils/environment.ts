const UNPARSED_GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const UNPARSED_WHATSAPP_GROUP_LINK = process.env.REACT_APP_WHATSAPP_GROUP_LINK;
const UNPARSED_PAYMENT_NAME = process.env.REACT_APP_PAYMENT_NAME;
const UNPARSED_PAYMENT_BANK_NAME = process.env.REACT_APP_PAYMENT_BANK_NAME;
const UNPARSED_PAYMENT_BANK_CODE = process.env.REACT_APP_PAYMENT_BANK_CODE;
const UNPARSED_PAYMENT_AGENCY = process.env.REACT_APP_PAYMENT_AGENCY;
const UNPARSED_PAYMENT_ACCOUNT = process.env.REACT_APP_PAYMENT_ACCOUNT;
const UNPARSED_PAYMENT_PIX_KEY = process.env.REACT_APP_PAYMENT_PIX_KEY

const requiredEnvVariables = [
  { name: 'GOOGLE_MAPS_API_KEY', value: UNPARSED_GOOGLE_MAPS_API_KEY },
  { name: 'WHATSAPP_GROUP_LINK', value: UNPARSED_WHATSAPP_GROUP_LINK },
  { name: 'PAYMENT_NAME', value: UNPARSED_PAYMENT_NAME },
  { name: 'PAYMENT_BANK_NAME', value: UNPARSED_PAYMENT_BANK_NAME },
  { name: 'PAYMENT_BANK_CODE', value: UNPARSED_PAYMENT_BANK_CODE },
  { name: 'PAYMENT_AGENCY', value: UNPARSED_PAYMENT_AGENCY },
  { name: 'PAYMENT_ACCOUNT', value: UNPARSED_PAYMENT_ACCOUNT },
  { name: 'PAYMENT_PIX_KEY', value: UNPARSED_PAYMENT_PIX_KEY },
];

const missingVariables = requiredEnvVariables
  .filter(({ value }) => !value)
  .map(({ name }) => name);

if (missingVariables.length > 0) {
  throw new Error(`Missing required environment variables: ${missingVariables.join(', ')}`);
}

export const environment = {
  GOOGLE_MAPS_API_KEY: UNPARSED_GOOGLE_MAPS_API_KEY as string,
  WHATSAPP_GROUP_LINK: UNPARSED_WHATSAPP_GROUP_LINK as string,
  PAYMENT_NAME: UNPARSED_PAYMENT_NAME as string,
  PAYMENT_BANK_NAME: UNPARSED_PAYMENT_BANK_NAME as string,
  PAYMENT_BANK_CODE: UNPARSED_PAYMENT_BANK_CODE as string,
  PAYMENT_AGENCY: UNPARSED_PAYMENT_AGENCY as string,
  PAYMENT_ACCOUNT: UNPARSED_PAYMENT_ACCOUNT as string,
  PAYMENT_PIX_KEY: UNPARSED_PAYMENT_PIX_KEY as string,
}

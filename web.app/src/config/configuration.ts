import { Auth0Config } from './Auth0Config';

const domain: string = process.env.REACT_APP_AUTH0_DOMAIN ?? '';
const clientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID ?? '';
const callbackUrl: string = process.env.REACT_APP_AUTH0_CALLBACK_URL ?? '';

export const AUTH_CONFIG: Auth0Config = {
  domain: domain,
  clientId: clientId,
  callbackUrl: callbackUrl,
};

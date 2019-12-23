import IAuth0Service, { RedirectCallbackType } from './IAuth0Service';
import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { AUTH_CONFIG } from '../config/configuration';

export const DEFAULT_REDIRECT_CALLBACK: RedirectCallbackType = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

class Auth0Service implements IAuth0Service {
  private static _instance: Auth0Service;
  private _api: Auth0Client;

  private constructor(api: Auth0Client) {
    this._api = api;
  }

  static async getInstance(): Promise<Auth0Service> {
    if (!Auth0Service._instance) {
      const config: Auth0ClientOptions = {
        domain: AUTH_CONFIG.domain,
        client_id: AUTH_CONFIG.clientId,
        redirect_uri: window.location.origin,
      };

      const api: Auth0Client = await createAuth0Client(config);

      Auth0Service._instance = new Auth0Service(api);
    }

    return Auth0Service._instance;
  }

  async handleRedirectCallback(onRedirectCallback: RedirectCallbackType = DEFAULT_REDIRECT_CALLBACK): Promise<void> {
    const { appState } = await this._api.handleRedirectCallback();
    onRedirectCallback(appState);
  }

  async isAuthenticated(): Promise<boolean> {
    return this._api.isAuthenticated();
  }

  async getUser(options?: GetUserOptions): Promise<any> {
    return this._api.getUser(options);
  }

  async loginWithPopup(options?: PopupLoginOptions, config?: PopupConfigOptions): Promise<void> {
    await this._api.loginWithPopup(options, config);
  }

  async getIdTokenClaims(options?: getIdTokenClaimsOptions): Promise<IdToken> {
    return this._api.getIdTokenClaims(options);
  }

  async loginWithRedirect(options?: RedirectLoginOptions): Promise<void> {
    return this._api.loginWithRedirect(options);
  }

  async getTokenSilently(options?: GetTokenSilentlyOptions): Promise<any> {
    return this._api.getTokenSilently(options);
  }

  async getTokenWithPopup(options?: GetTokenWithPopupOptions, config?: PopupConfigOptions): Promise<string> {
    return this._api.getTokenWithPopup(options, config);
  }

  logout(options?: LogoutOptions): void {
    this._api.logout(options);
  }
}

export async function getAuth0Service(): Promise<IAuth0Service> {
  return Auth0Service.getInstance();
}

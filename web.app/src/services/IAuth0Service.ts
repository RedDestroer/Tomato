export type RedirectCallbackType = (result: RedirectLoginResult) => void;

interface IAuth0Service {
  handleRedirectCallback(onRedirectCallback?: RedirectCallbackType): Promise<void>;
  isAuthenticated(): Promise<boolean>;
  getUser(options?: GetUserOptions): Promise<any>;
  loginWithPopup(options?: PopupLoginOptions, config?: PopupConfigOptions): Promise<void>;
  getIdTokenClaims(options?: getIdTokenClaimsOptions): Promise<IdToken>;
  loginWithRedirect(options?: RedirectLoginOptions): Promise<void>;
  getTokenSilently(options?: GetTokenSilentlyOptions): Promise<any>;
  getTokenWithPopup(options?: GetTokenWithPopupOptions, config?: PopupConfigOptions): Promise<string>;
  logout(options?: LogoutOptions): void;
}

export default IAuth0Service;

import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';

// https://github.com/tommedema/startup-boilerplate
export class Auth0Api {
  private _auth0Api: Auth0Client;

  constructor(auth0Api: Auth0Client) {
    this._auth0Api = auth0Api;
  }

  static create(baseUrl: string): Auth0Api {
    const config: Auth0ClientOptions = {
      domain: baseUrl,
      client_id: 'MY-CLIENT-ID',
    };
    const auth0ApiInstance: Auth0Client = new Auth0Client(config);

    return new Auth0Api(auth0ApiInstance);
  }

  loginWithRedirect(): Promise<void> {
    const options: RedirectLoginOptions = {
      redirect_uri: 'http://localhost:3000/',
    };
    return this._auth0Api.loginWithRedirect(options);
  }
}

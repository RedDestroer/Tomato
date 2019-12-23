import React, { useState, useEffect, useContext } from 'react';
import { getAuth0Service, DEFAULT_REDIRECT_CALLBACK } from '../services/Auth0Service';
import IAuth0Service, { RedirectCallbackType } from '../services/IAuth0Service';

type Auth0ContextProps = {
  isAuthenticated: boolean;
  user: any;
  auth0Service?: IAuth0Service;
  loading: boolean;
  popupOpen: boolean;
  loginWithPopup: () => Promise<void>;
  handleRedirectCallback: () => Promise<void>;
  getIdTokenClaims: () => Promise<IdToken | undefined>;
  loginWithRedirect: (options?: RedirectLoginOptions) => Promise<void | undefined>;
  getTokenSilently: () => Promise<any>;
  getTokenWithPopup: () => Promise<string | undefined>;
  logout: (options?: LogoutOptions) => void;
};

const defaultState: Partial<Auth0ContextProps> = {};

export const Auth0Context = React.createContext<any>(defaultState);
export const useAuth0 = () => useContext<Auth0ContextProps>(Auth0Context);

interface Props {
  children: React.ReactNode;
  onRedirectCallback: RedirectCallbackType;
}

export const Auth0Provider: React.FC<Props> = props => {
  const { children, onRedirectCallback = DEFAULT_REDIRECT_CALLBACK } = props;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>();
  const [auth0Service, setAuth0Service] = useState<IAuth0Service>();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0ServiceInst = await getAuth0Service();
      setAuth0Service(auth0ServiceInst);

      if (window.location.search.includes('code=')) {
        await auth0ServiceInst.handleRedirectCallback(onRedirectCallback).catch(error => {
          console.log(error);
        });
      }

      const isAuthenticatedInst = await auth0ServiceInst.isAuthenticated();
      setIsAuthenticated(isAuthenticatedInst);

      if (isAuthenticatedInst) {
        const userInst = await auth0ServiceInst.getUser();
        setUser(userInst);
      }

      setLoading(false);
    };
    // tslint:disable-next-line: no-floating-promises
    initAuth0();
  }, [onRedirectCallback]);

  const loginWithPopup = async () => {
    setPopupOpen(true);
    try {
      await auth0Service?.loginWithPopup();
    } catch (error) {
      // Ignore
    } finally {
      setPopupOpen(false);
    }
    const userInst = await auth0Service?.getUser();
    setUser(userInst);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Service?.handleRedirectCallback();
    const userInst = await auth0Service?.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(userInst);
  };

  const value: Auth0ContextProps = {
    isAuthenticated,
    user,
    loading,
    popupOpen,
    loginWithPopup,
    handleRedirectCallback,
    getIdTokenClaims: async () => auth0Service?.getIdTokenClaims(),
    loginWithRedirect: async (options?: RedirectLoginOptions) => auth0Service?.loginWithRedirect(options),
    getTokenSilently: async () => auth0Service?.getTokenSilently(),
    getTokenWithPopup: async () => auth0Service?.getTokenWithPopup(),
    logout: (options?: LogoutOptions) => auth0Service?.logout(options),
  };

  return <Auth0Context.Provider value={value}>{children}</Auth0Context.Provider>;
};

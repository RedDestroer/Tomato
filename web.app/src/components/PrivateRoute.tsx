import React, { useEffect } from 'react';
import { Route, withRouter, RouteComponentProps } from 'react-router-dom';
import { useAuth0 } from '../lib/auth0';

interface ExtendedProps extends RouteComponentProps {
  component: React.ReactNode | ((...args: any[]) => any) | any;
  path: string | string[];
}

type Props = ExtendedProps & { [prop: string]: string | React.ReactNode | ((...args: any[]) => any) };

const PrivateRoute: React.FC<Props> = props => {
  const { component, path, location, ...rest } = props;
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    const fn = async () => {
      if (!isAuthenticated) {
        const options: RedirectLoginOptions = {
          appState: { targetUrl: location.pathname },
        };
        await loginWithRedirect(options);
      }
    };
    // tslint:disable-next-line: no-floating-promises
    fn();
  }, [isAuthenticated, loginWithRedirect, path, location]);

  const render = (componentProps: any) => (isAuthenticated === true ? React.createElement(component, componentProps) : null);

  return <Route path={path} render={render} {...rest} />;
};

export default withRouter(PrivateRoute);

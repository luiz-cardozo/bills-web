import React from 'react';
import {
  RouteProps as ReactDOMPRops,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/Default';

import { useAuth } from '../hooks/auth';

interface IRouteProps extends ReactDOMPRops {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  const Layout: React.ComponentType = user ? DefaultLayout : React.Fragment;
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;

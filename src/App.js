import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, SignIn, SignUp, Browse } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import UseAuthListener from './hooks/use-auth-listener';

export default function App() {
	const { user } = UseAuthListener();

	return (
		<Router>
			<Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
			</Switch>
		</Router>
	);
};

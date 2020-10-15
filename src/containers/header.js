import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src="/images/logo/logo.svg" alt="Netflix" />
        <Header.ButtonLink> Sign In </Header.ButtonLink>
      </Header.Frame>
      { children }
    </Header>
  );
};

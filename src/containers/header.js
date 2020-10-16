import React from 'react';
import { Header, SendEmail, Feature } from '../components';
import * as ROUTES from '../constants/routes';

export default function HeaderContainer({ children }) {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src="/images/logo/logo.svg" alt="Netflix" />
          <Header.ButtonLink> Sign In </Header.ButtonLink>
        </Header.Frame>

        <Feature>
          <Feature.Title>
            Unlimited movies, TV shows, and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anyware. Cancel anytime
          </Feature.SubTitle>

          <SendEmail>
            <SendEmail.Text>
              Ready to watch? Enter your email to create or restart your membership.
            </SendEmail.Text>
            <SendEmail.Break />
            <SendEmail.Input placeholder="Email address" />
            <SendEmail.Button>Get Started</SendEmail.Button>
          </SendEmail>
        </Feature>
      </Header>
      { children }
    </>
  );
};

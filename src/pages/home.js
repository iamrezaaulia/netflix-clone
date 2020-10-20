import React from 'react'
import {
	JumbotronContainer,
	FaqsContainer,
  FooterContainer,
  HeaderContainer
} from '../containers';
import { SendEmail, Feature } from '../components';

export default function Home() {
  return (
    <>
      <HeaderContainer>
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
      </HeaderContainer>
      <JumbotronContainer />
			<FaqsContainer />
			<FooterContainer />
    </>
  )
}

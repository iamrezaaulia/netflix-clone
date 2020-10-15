import React from 'react'
import {
	JumbotronContainer,
	FaqsContainer,
  FooterContainer,
  HeaderContainer
} from '../containers';

export default function Home() {
  return (
    <HeaderContainer>
      <JumbotronContainer />
			<FaqsContainer />
			<FooterContainer />
    </HeaderContainer>
  )
}

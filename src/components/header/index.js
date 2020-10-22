import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { 
  Background, 
  Container, 
  Logo, 
  ButtonLink,
  Feature,
  Title,
  SubTitle,
  Link
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}> {children} </Background> : children;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}> {children} </Feature> 
};

Header.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children} </Title>;
};

Header.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}> {children} </SubTitle>;
};

Header.TextLink = function FeatureTextLink({ children, ...restProps }) {
  return <Link {...restProps}> {children} </Link>;
};

Header.Logo = function HeaderLogo({ to, ...restProps}) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}> {children} </ButtonLink>
}

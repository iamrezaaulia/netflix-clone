import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { 
  Background, 
  Container, 
  Logo, 
  ButtonLink,
  Feature,
  Title,
  SubTitle,
  Link,
  Group,
  Picture,
  Profile,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton
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

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}> {children} </ButtonLink>
}

Header.Logo = function HeaderLogo({ to, ...restProps}) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}> {children} </Group> 
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Profile = function FeatureProfile({ children, ...restProps }) {
  return <Profile {...restProps}> {children} </Profile>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)} data-testid='search-click'>
        <img src='/images/icons/search.png' alt='Search' />
      </SearchIcon>
      <SearchInput 
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder='Search films and series'
        active={searchActive}
        data-testid='search-input'
      />
    </Search>
  );
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}> {children} </PlayButton>
}



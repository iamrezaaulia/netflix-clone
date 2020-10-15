import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div``;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  margin: 0 56px;
  padding: 18px 0;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;

  @media (min-width: 1440px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: auto;
  height: fit-content;
  color: #ffffff;
  border: 0;
  border-radius: 2px;
  box-sizing: border-box;
  font-size: 16px;
  padding: 8px 18px;
  text-decoration: none;
  cursor: pointer;

  &::hover {
    background-color: #f40612;
  }
`;
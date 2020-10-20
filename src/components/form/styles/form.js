import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  max-width: 450px;
  width: 100%;
  margin: auto;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
  background-color: rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  border-radius: 2px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 2px;
  font-size: 14px;
  margin: 0 0 16px;
  color: #ffffff;
  padding: 15px 20px;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 14px;
  line-height: normal;
  color: #838383;
`;

export const Link = styled(ReactRouterLink)`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: #333333;
  border-radius: 2px;
  border: 0;
  box-sizing: border-box;
  color: #ffffff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  outline: none;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 2px;
  border: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin: 24px 0 12px;
  padding: 16px;
  outline: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  } 
`;
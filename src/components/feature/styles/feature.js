import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 165px 45px;
  border-bottom: 5px solid #222222;
`;

export const Title = styled.h1`
  color: #ffffff;
  max-width: 640px;
  margin: auto;
  font-size: 50px;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: #ffffff;
  margin: 16px auto;
  font-size: 32px;
  font-weight: normal;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
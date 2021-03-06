import styled from 'styled-components/macro';

export const Title = styled.p`
  color: #e5e5e5;
  font-size: 24px;
  font-weight: bold;
  margin-top: 0;
  margin-left: 56px;
  margin-right: 56px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  box-sizing: border-box;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    };
  };

  &:last-of-type {
    margin-bottom: 0;
  };
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => (alignItems && `align-items: ${alignItems}`)};
  ${({ margin }) => (margin && `margin: ${margin}`)};

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -150px;
    };
  };
`;

export const SubTitle = styled.p`
  display: none;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
`;

export const Text = styled.p`
  display: none;
  color: #ffffff;
  font-size: 10px;
  line-height: normal;
  margin-top: 5px;
  margin-bottom: 0;
  user-select: none;
`;

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-right: 5px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.3);
    z-index: 99;
  };

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    };
  };

  &:first-of-type {
    margin-left: 56px;
    
    @media (max-width: 1000px) {
      margin-left: 30px;
    };
  };

  &:last-of-type {
    margin-right: 56px;

    @media (max-width: 1000px) {
      margin-right: 30px;
    };
  };
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  height: auto;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;

export const FeatureText = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
  margin: 0;

  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src });
  background-size: contain;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: #000000;
  position: relative;
  height: 360px;

  @media (max-width: 766px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    };

    ${FeatureText} {
      font-size: 14px;
    };
  };
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const FeatureClose = styled.button`
  color: #ffffff;
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: transparent;
  border: 0;
  outline: none;
  cursor: pointer;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Maturity = styled.div`
  color: #ffffff;
  background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
  width: 20px;
  border-radius: 2px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
  padding: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0,2);
`;
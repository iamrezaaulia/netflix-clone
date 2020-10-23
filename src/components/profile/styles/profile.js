import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  width: 100%;
  color: #ffffff;
  text-align: center;
  font-size: 48px;
  font-weight: 500;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Picture = styled.img`
  max-width: 150px;
  width: 100%;
  height: auto;
  border: 3px solid #000000;
  cursor: pointer;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 22px;
  cursor: pointer;
`;

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Picture} {
    border: 3px solid #ffffff;
  }
  
  &:hover ${Name} {
    color: #ffffff;
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }  
`;

import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0 20px;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;
    outline: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e50914;
  border-color: #ff0a10;
  border-radius: 2px;
  width: 114px;
  height: 45px;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  padding-left: 0;
  transition: background-color 0.2s ease;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #ff0a16;
  }
`;

export const Close = styled.button`
  position: absolute;
  color: #ffffff;
  width: 22px;
  height: 22px;
  right: 20px;
  top: 10px;
  background-color: transparent;
  border: 0;
  outline: none;
  opacity: 0.3;
  transition: background-color 0.5s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
    background-color: transparent;
  }

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

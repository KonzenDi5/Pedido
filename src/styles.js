import styled from "styled-components";

export const Container = styled.div`
  background-color: red;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100vw;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: brown;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  font-size: 1em;
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
`;

export const Pergunta = styled.h1`
  color: white;
  margin-bottom: 20px; /* Espaçamento abaixo da pergunta */
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 500px;
  position: relative;
  overflow: hidden;
`;

export const Kitanal = styled.img`
width: 200px;
`

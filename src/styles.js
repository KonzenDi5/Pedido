import styled, { keyframes, createGlobalStyle } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-12px); }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(244, 114, 182, 0.45); }
  60%       { box-shadow: 0 0 0 16px rgba(244, 114, 182, 0); }
`;

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Poppins', sans-serif; }
`;

export const Container = styled.div`
  background: linear-gradient(135deg, #12011f 0%, #2d0a52 50%, #180828 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 28px;
  padding: 52px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.65s ease-out;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
`;

export const Pergunta = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  background: linear-gradient(135deg, #f9a8d4 20%, #fff 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 180px;
  position: relative;
  overflow: hidden;
`;

export const ButtonSim = styled.button`
  background: linear-gradient(135deg, #ec4899, #be185d);
  color: #fff;
  border: none;
  padding: 14px 52px;
  font-size: 1.05rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  letter-spacing: 0.4px;
  animation: ${pulse} 2.4s ease-in-out infinite;
  transition: transform 0.15s, box-shadow 0.15s;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 10px 30px rgba(236, 72, 153, 0.55);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const ButtonNao = styled.button`
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 14px 52px;
  font-size: 1.05rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  border-radius: 50px;
  cursor: pointer;
  position: absolute;
  letter-spacing: 0.4px;
  white-space: nowrap;
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 0.65);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

export const Kitanal = styled.img`
  width: 260px;
  border-radius: 20px;
  animation: ${float} 3s ease-in-out infinite;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
`;

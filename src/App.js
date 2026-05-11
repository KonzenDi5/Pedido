import React, { useState } from "react";
import { GlobalStyle, Container, Card, ButtonSim, ButtonNao, Pergunta, Buttons, Kitanal } from "./styles";
import kitanal from './assets/kitanal.png'

function App() {
  const [showLove, setShowLove] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 74, left: 55 });

  const handleNoClick = () => {
    setNoButtonPosition({
      top: Math.random() * 120,
      left: Math.random() * 170,
    });
  };

  const handleYesClick = () => {
    setShowLove(true);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        {showLove ? (
          <Kitanal alt="kitanal" src={kitanal} />
        ) : (
          <Card>
            <Pergunta>Cuzinho hj?</Pergunta>
            <Buttons>
              <ButtonSim onClick={handleYesClick}>Sim</ButtonSim>
              <ButtonNao
                style={{ top: noButtonPosition.top, left: noButtonPosition.left }}
                onClick={handleNoClick}
              >
                Não
              </ButtonNao>
            </Buttons>
          </Card>
        )}
      </Container>
    </>
  );
}

export default App;

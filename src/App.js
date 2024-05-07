import React, { useState } from "react";
import { Container, Button, Pergunta, Buttons, Kitanal } from "./styles";
import kitanal from './assets/kitanal.png'


function App() {
  const [showLove, setShowLove] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });

  const handleNoClick = () => {
    setNoButtonPosition({
      top: Math.random() * 300, 
      left: Math.random() * 250, 
    });
  };

  const handleYesClick = () => {
    setShowLove(true);
  };

  return (
    <Container>
      {showLove ? (
        <Kitanal alt="kitanal" src={kitanal} />
      ) : (
        <>
          <Pergunta>Cuzinho no finde?</Pergunta>
          <Buttons>
            <Button onClick={handleYesClick}>Sim</Button>
            <Button
              style={{ top: noButtonPosition.top, left: noButtonPosition.left }}
              onClick={handleNoClick}
            >
              Não
            </Button>
          </Buttons>
        </>
      )}
    </Container>
  );
}

export default App;

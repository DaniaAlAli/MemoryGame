import React from "react";

//Style
import { TitleWrap, GlobalStyle, RefreshButton } from "./styles";

//Component
import PhotoList from "./components/PhotoList";

function App() {
  //Restart The Game
  const restartGame = () => {
    console.log("Clicked");
    window.location.reload();
  };

  return (
    <div>
      <GlobalStyle />
      <TitleWrap>
        <h1> Parctice Your Memory </h1>
        <h2> ENJOY ! ! </h2>
        <RefreshButton type="button" onClick={restartGame}>
          Restart The Game
        </RefreshButton>
      </TitleWrap>
      <PhotoList />
    </div>
  );
}
export default App;

import React from "react";

//Style
import { TitleWrap, GlobalStyle } from "./styles";

//Component
import PhotoList from "./components/PhotoList";

//Data
import photos from "./photos";

function App() {
  //if two Cards are open

  //Push them to a new array << how I saved them??
  //create a method that sees if the Cards was matched >> keep them unlflipped
  //else reset the cards exept the open ones

  return (
    <div>
      <GlobalStyle />
      <TitleWrap>
        <h1> Parctice Your Memory </h1>
        <h2> ENJOY ! ! </h2>
      </TitleWrap>
      <PhotoList />
    </div>
  );
}
export default App;
//  shuffle(photoarray) {
//   var currentIndex = photoarray.length,
//     tempValue,
//     randomIndex;

//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     tempValue = photoarray[currentIndex];
//     photoarray[currentIndex] = photoarray[randomIndex];
//     photoarray[randomIndex] = tempValue;
//   }

//   return photoarray;
// }
// shuffle(photos);

// export default App;

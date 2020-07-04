import React, { useState } from "react";

//Style
import { PhotoWrapper } from "../styles";

const PhotoItem = (props) => {
  const photos = props.photos;

  const [currentPhoto, setCurrentPhoto] = useState(photos.image);

  const handleFlip = () => {
    if (currentPhoto === photos.image) setCurrentPhoto(photos.back);
  };

  return (
    <PhotoWrapper className="col-lg-2">
      {" "}
      <img
        onClick={handleFlip}
        src={currentPhoto === photos.back ? photos.image : photos.back}
      />{" "}
    </PhotoWrapper>
  );
};

export default PhotoItem;

// const handleDelete = () => {
//   props.deletePhoto(photos.id);
// };
// const handleClick = () => {
//   props.handleClick1(props.photos.image);
// };

// scritps.js

// const cards = photos;

// let hasFlippedCard = false;
// let firstCard, secondCard;

// function flipCard() {
//   this.classList.add("flip");

//   if (!hasFlippedCard) {
//     hasFlippedCard = true;
//     firstCard = this;
//     return;
//   }

//   secondCard = this;
//   hasFlippedCard = false;

//   checkForMatch();
// }

// function checkForMatch() {
//   if (firstCard.dataset.framework === secondCard.dataset.framework) {
//     disableCards();
//     return;
//   }

//   unflipCards();
// }

// function disableCards() {
//   firstCard.removeEventListener("click", flipCard);
//   secondCard.removeEventListener("click", flipCard);
// }

// function unflipCards() {
//   setTimeout(() => {
//     firstCard.classList.remove("flip");
//     secondCard.classList.remove("flip");
//   }, 1500);
// }

// cards.forEach((card) => card.addEventListener("click", flipCard));

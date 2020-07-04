import React, { useState } from "react";

//Components
import PhotoItem from "./PhotoItem";

//Data
import photos from "../photos";

//Style
import { ListWrapper, TitleWrap } from "../styles";

const PhotoList = () => {
  //Shuffle

  const shuffle = (photos) => {
    let currentIndex = 12,
      tempValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      tempValue = photos[currentIndex];
      photos[currentIndex] = photos[randomIndex];
      photos[randomIndex] = tempValue;
    }
  };
  shuffle(photos);

  const [_photos, setPhotos] = useState(photos);

  // const [flipped, setFlipped] = useState([]);
  // const [disable, setDisabled] = useState(false);

  //Adding the opened photos into a new array

  const updatePhoto = (photosID) => {
    const foundPhoto = _photos.find((photo) => photo.id === photosID);
    foundPhoto.click = !foundPhoto.click;
    console.log(_photos);

    let openedCards = _photos.filter((img) => img.click === true);

    if (openedCards.length % 2 === 0) {
      if (
        openedCards[openedCards.length - 1].image ===
        openedCards[openedCards.length - 2].image
      ) {
        console.log("YESSSS"); //to check if it's working
      } else {
        console.log("NOOOOO");
        const foundPhoto2 = _photos.find((photo) => photo.click);
        openedCards = [];

        setTimeout(function () {
          foundPhoto2.click = false;
          foundPhoto.click = false;
          console.log(_photos);
          console.log(openedCards);
        }, 1300);
      }
    }
    setPhotos(_photos);
  };

  const photoList = _photos.map((photos) => (
    <PhotoItem photos={photos} updatePhoto={updatePhoto} key={photos.id} />
  ));

  return (
    <TitleWrap>
      <ListWrapper className="conrtainer">
        <div className="row"> {photoList}</div>
      </ListWrapper>
    </TitleWrap>
  );
};

export default PhotoList;

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
    const updatesPhotos = _photos;
    const foundPhoto = updatesPhotos.find((photo) => photo.id === photosID);
    foundPhoto.click = true;

    let openedCards = updatesPhotos.filter((img) => img.click === true);
    if (openedCards.length === 2) {
      if (openedCards[0].image === openedCards[1].image) {
        console.log("YESSSS"); //to check if it's working
      } else {
        console.log("NOOOOO");
        foundPhoto.click = false;
        const foundPhoto2 = updatesPhotos.find((photo) => photo.click);
        openedCards = [];
        foundPhoto2.click = false;
        console.log(updatesPhotos);
      }
    }

    setPhotos(updatesPhotos);

    // const handleFlipped = (id) => {
    //   setDisabled(true);
    //   setFlipped([...flipped, id]);
    //   if (flipped.length === 0) {
    //     setFlipped([id]);
    //     setDisabled(false);
    //   } else {
    //     if (samePhotoClicked(id)) return setFlipped([flipped[0], id]);
    //   }
    // };
    // const samePhotoClicked = (id) => flipped.includes(id);

    // const newArray = [];
    // newArray.push(updatesPhotos);
    // if (newArray.length == 2) {
    //   const result = updatesPhotos.filter((img) => img === updatesPhotos.image);
    // } else updatePhoto(photosID);
  };

  //   const match = (photoarray) => {
  //     const result = photoarray.filter((img) => img === photoarray.image);
  //     return result;
  //   };
  // if (matched[0] === matched[1])
  //   return (matched[1] = matched[1]), (matched[0] = matched[0]);
  // else
  //   return (matched[0] = matched[1] =
  //     "https://www.stars-music.com/medias/serato/vinyl-control-tone-black-12-la-paire-hd-2-57987.png");

  //   match(open(photos));

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

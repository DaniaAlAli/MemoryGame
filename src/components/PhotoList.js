import React, { useState } from "react";

//Components
import PhotoItem from "./PhotoItem";

//Data
import photos from "../photos";

//Style
import { ListWrapper, TitleWrap } from "../styles";

const PhotoList = () => {
  //Shuffle

  // const shuffle = (photos) => {
  //   let currentIndex = 12,
  //     tempValue,
  //     randomIndex;

  //   while (currentIndex !== 0) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;
  //     tempValue = photos[currentIndex];
  //     photos[currentIndex] = photos[randomIndex];
  //     photos[randomIndex] = tempValue;
  //   }
  // };
  // shuffle(photos);

  const [_photos, setPhotos] = useState(photos);

  // const [twoPhotos, setTwoPhotos] = useState([]);

  // const [flipped, setFlipped] = useState([]);
  // const [disable, setDisabled] = useState(false);

  //Adding the opened photos into a new array
  let twoPhotos = [];
  const updatePhoto = (photosID) => {
    const foundPhoto = _photos.find((photo) => photo.id === photosID);
    foundPhoto.click = !foundPhoto.click;
    console.log(_photos);

    twoPhotos.push(foundPhoto);

    console.log("before if", twoPhotos);

    if (twoPhotos.length === 2) {
      console.log("after length checkd");
      if (twoPhotos[0].image === twoPhotos[1].image) {
        console.log("YESSSS"); //to check if it's working
        twoPhotos = [];
        console.log(`if yes`, twoPhotos);
      } else {
        console.log("NOOOOO");

        foundPhoto.click = false;

        const foundPhoto2 = _photos.find(
          (photo) => photo.id === twoPhotos[0].id
        );

        setTimeout(function () {
          foundPhoto2.click = false;
          console.log(_photos);
          console.log(twoPhotos);
        }, 1300);
        twoPhotos = [];
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

import React, { useState, useEffect } from "react";

//Components
import PhotoItem from "./PhotoItem";

//Data
import photos from "../photos";

//Style
import { ListWrapper, TitleWrap, Points } from "../styles";

let twoPhotos = [];
let count = 0;
const PhotoList = () => {
  const [_photos, setPhotos] = useState(photos);

  useEffect(() => {
    const shuffle = photos.sort((a, b) => {
      return 0.5 - Math.random();
    });
    setPhotos(shuffle);
  }, []);

  const updatePhoto = (photosID) => {
    const foundPhoto = _photos.find((photo) => photo.id === photosID);
    foundPhoto.click = !foundPhoto.click;

    setPhotos([..._photos]);
    twoPhotos.push(foundPhoto);

    console.log(twoPhotos.length);
    if (twoPhotos.length === 2) {
      console.log("after length checkd");
      if (twoPhotos[0].image === twoPhotos[1].image) {
        twoPhotos = [];
        count++;
      } else {
        if (count <= 0) count = 0;
        else count--;
        const foundPhoto2 = _photos.find(
          (photo) => photo.id === twoPhotos[0].id
        );
        setTimeout(function () {
          foundPhoto.click = false;
          foundPhoto2.click = false;
        }, 300);
        twoPhotos = [];
        setPhotos([..._photos]);
      }
    }
  };

  const photoList = _photos.map((photos) => (
    <PhotoItem photos={photos} updatePhoto={updatePhoto} key={photos.id} />
  ));

  return (
    <TitleWrap>
      <Points>Poinst : {count}</Points>
      <ListWrapper className="conrtainer">
        <div className="row"> {photoList}</div>
      </ListWrapper>
    </TitleWrap>
  );
};

export default PhotoList;

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

import React, { useState } from "react";

//Style
import { PhotoWrapper } from "../styles";

const PhotoItem = (props) => {
  const photos = props.photos;

  const [curentPhoto, setCurrentPhoto] = useState(photos.image);

  const handleFlip = () => {
    props.updatePhoto(photos.id);
    setCurrentPhoto(!photos.click);
  };

  return (
    <PhotoWrapper className="col-lg-2">
      {" "}
      <img
        alt={""}
        onClick={handleFlip}
        src={
          photos.click
            ? photos.image
            : "https://www.stars-music.com/medias/serato/vinyl-control-tone-black-12-la-paire-hd-2-57987.png"
        }
      />{" "}
    </PhotoWrapper>
  );
};

export default PhotoItem;

import React from "react";

//Style
import { PhotoWrapper } from "../styles";

const PhotoItem = (props) => {
  const photos = props.photos;

  const handleFlip = () => {
    if (!photos.click) {
      props.updatePhoto(photos.id);
    }
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

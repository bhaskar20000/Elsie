import { useState } from "react";

import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

const ImgCard = (props) => {
  const [isHeartclick, updateLikeStatus] = useState(false);

  const { eachimage } = props;
  const { image, time } = eachimage;

  const onLike = () => {
    updateLikeStatus((prev) => !prev);
  };

  return (
    <div className="first-month-image-div">
      <img
        onDoubleClick={onLike}
        className="first-name-image"
        src={image}
        alt="f1"
      />
      <div className="time-container-first">
        <p className="first-para-time">{time}</p>
        {isHeartclick ? (
          <GoHeartFill className="heart-fill-icon" onClick={onLike} />
        ) : (
          <GoHeart onClick={onLike} className="heart-icon-first" />
        )}
      </div>
    </div>
  );
};

export default ImgCard;

import { useState } from "react";

import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

const NineCard = () => {
  const [isHeartclick, updateLikeStatus] = useState(false);

  const time = "15 May 2025";

  const onLike = () => {
    updateLikeStatus((prev) => !prev);
  };

  return (
    <div className="fifth-outer-container">
      <h1 className="fifth-heading">Ninth Month</h1>
      <div className="first-month-image-div">
        <img
          onDoubleClick={onLike}
          className="first-name-image"
          src="https://res.cloudinary.com/dpqt8338m/image/upload/v1759566469/9th_month_binghr.jpg"
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
    </div>
  );
};

export default NineCard;

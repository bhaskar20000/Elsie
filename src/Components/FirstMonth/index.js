import { useState } from "react";

import f1 from "../../Pictures/1stMonth/f1.jpg";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import "./index.css";

const f1imgs = [
  {
    image: f1,
    id: 1,
    time: "15 sep 2024",
  },
];

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

const FirstMonth = () => {
  return (
    <div className="first-outer-container">
      <h1 className="first-month-heading">First Month</h1>
      <div className="first-container-images-container">
        {f1imgs.map((eachitem) => (
          <ImgCard key={eachitem.id} eachimage={eachitem} />
        ))}
      </div>
    </div>
  );
};

export default FirstMonth;

import { Link } from "react-router";

import f1 from "../../Pictures/1stMonth/f1.jpg";
import s1 from "../../Pictures/2ndMonth/s1.jpg";
import t1 from "../../Pictures/3rdMonth/t1.jpg";
import f from "../../Pictures/4thMonth/f.jpg";
import fifth1 from "../../Pictures/5thMonth/fifth1.jpg";
import sixth1 from "../../Pictures/6thMonth/sixth1.jpg";
import seven1 from "../../Pictures/7thMonth/seven1.jpg";
import eight1 from "../../Pictures/8thMonth/eigth1.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const SliderPage = () => {
  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-home-conatiner">
      <h1 className="slide-heading">Slide to see more photos</h1>
      <Slider {...settings}>
        <div>
          <img className="slider-image" alt="elsie's-image" src={f1} />
        </div>
        <div>
          <img className="slider-image" alt="elsie's-image" src={s1} />
        </div>
        <div>
          <img className="slider-image" alt="elsie's-image" src={t1} />
        </div>
        <div>
          <img className="slider-image" alt="elsie's-image" src={f} />
        </div>
        <div>
          <img className="slider-image" alt="elsie's-image" src={fifth1} />
        </div>
        <div>
          <img className="slider-image" alt="elsie's-image" src={sixth1} />
        </div>
        <div>
          <img className="slider-image" alt="elsie's-image" src={seven1} />
        </div>
        <div>
          <img className="slider-image" alt="elsie's-image" src={eight1} />
        </div>
        <div>
          <img
            className="slider-image"
            alt="elsie's-image"
            src="https://res.cloudinary.com/dpqt8338m/image/upload/v1759566469/9th_month_binghr.jpg"
          />
        </div>
        <div>
          <img
            className="slider-image"
            alt="elsie's-image"
            src="https://res.cloudinary.com/dpqt8338m/image/upload/v1759567719/10_th_month_nddqde.jpg"
          />
        </div>
        <div>
          <img
            className="slider-image"
            alt="elsie's-image"
            src="https://res.cloudinary.com/dpqt8338m/image/upload/v1759568168/11th_month_etzwqv.jpg"
          />
        </div>
        <div>
          <img
            className="slider-image-12"
            alt="elsie's-image"
            src="https://res.cloudinary.com/dpqt8338m/image/upload/v1759568119/12th_month_iggava.jpg"
          />
        </div>
      </Slider>
      <Link to="/">
        <div className="back-button-div">
          <button className="back-button">Back</button>
        </div>
      </Link>
    </div>
  );
};

export default SliderPage;

import React from "react";
import Slider from "react-slick";
import { useEffect, useContext, useRef } from "react";
import f1 from "../../Pictures/1stMonth/f1.jpg";
import s1 from "../../Pictures/2ndMonth/s1.jpg";
import t1 from "../../Pictures/3rdMonth/t1.jpg";
import f from "../../Pictures/4thMonth/f.jpg";
import fifth1 from "../../Pictures/5thMonth/fifth1.jpg";
import sixth1 from "../../Pictures/6thMonth/sixth1.jpg";
import seven1 from "../../Pictures/7thMonth/seven1.jpg";
import eight1 from "../../Pictures/8thMonth/eigth1.jpg";
import backgroundHome from "../../Pictures/HomePageBackground/backgroundHome.png";
import NavContext from "../../Context/Navcontext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const Home = () => {
  const homeRef = useRef(null);
  const { updateViewContext } = useContext(NavContext);

  const onViewMore = () => {
    updateViewContext(true);
  };

  let settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    if (homeRef.current) {
      homeRef.current.style.backgroundImage = `url(${backgroundHome})`;
      homeRef.current.style.backgroundSize = "cover";
      homeRef.current.style.backgroundRepeat = "no-repeat";
      homeRef.current.style.backgroundPosition = "center";
    }
  }, []);

  return (
    <div ref={homeRef} className="home-outer-container">
      <h1 className="home-heading">Welcome to Elsie's World</h1>
      <p>Watch her grow, giggle, and shine!</p>
      <Slider {...settings}>
        <div>
          <img className="slider-image" alt="elsie's image" src={f1} />
        </div>
        <div>
          <img className="slider-image" alt="elsie's image" src={s1} />
        </div>
        <div>
          <img className="slider-image" alt="elsie's image" src={t1} />
        </div>
        <div>
          <img className="slider-image" alt="elsie's image" src={f} />
        </div>
        <div>
          <img className="slider-image" alt="elsie's image" src={fifth1} />
        </div>
        <div>
          <img className="slider-image" alt="elsie's image" src={sixth1} />
        </div>
        <div>
          <img className="slider-image" alt="elsie's image" src={seven1} />
        </div>
        <div>
          <img className="slider-image" alt="elsie's image" src={eight1} />
        </div>
        <div>
          <img
            className="slider-image"
            alt="elsie's image"
            src="https://res.cloudinary.com/dpqt8338m/image/upload/v1759566469/9th_month_binghr.jpg"
          />
        </div>
        <div>
          <img
            className="slider-image"
            alt="elsie's image"
            src="https://res.cloudinary.com/dpqt8338m/image/upload/v1759567719/10_th_month_nddqde.jpg"
          />
        </div>
        <div>
          <img
            className="slider-image"
            alt="elsie's image"
            src="https://res.cloudinary.com/dpqt8338m/image/upload/v1759568168/11th_month_etzwqv.jpg"
          />
        </div>
        <div>
          <img
            className="slider-image-12"
            alt="elsie's image"
            src="https://res.cloudinary.com/dpqt8338m/image/upload/v1759568119/12th_month_iggava.jpg"
          />
        </div>
      </Slider>
      <button className="view-more-home-button" onClick={onViewMore}>
        View More
      </button>
    </div>
  );
};

export default Home;

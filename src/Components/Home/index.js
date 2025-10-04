import { useEffect, useContext, useRef } from "react";

import backgroundHome from "../../Pictures/HomePageBackground/backgroundHome.png";
import { Link } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const Home = () => {
  const homeRef = useRef(null);

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
      <div className="home-image-div">
        <h1 className="home-heading">Welcome to Elsie's Website</h1>
        <p>Watch her grow, giggle, and shine!</p>
        <img
          className="home-image"
          src="https://res.cloudinary.com/dpqt8338m/image/upload/v1759568119/12th_month_iggava.jpg"
        />
      </div>
      <div>
        <Link to="/slides-page">
          <button className="view-more-home-button">View More</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

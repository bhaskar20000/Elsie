import { useEffect, useContext, useRef } from "react";

import backgroundHome from "../../Pictures/HomePageBackground/backgroundHome.png";
import NavContext from "../../Context/Navcontext";
import "./index.css";

const Home = () => {
  const homeRef = useRef(null);
  const { updateViewContext } = useContext(NavContext);

  const onViewMore = () => {
    updateViewContext(true);
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
      <button className="view-more-home-button" onClick={onViewMore}>
        View More
      </button>
    </div>
  );
};

export default Home;

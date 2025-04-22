import { useEffect, useRef } from "react";
import backgroundHome from "../../Pictures/HomePageBackground/backgroundHome.png";
import "./index.css";

const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    if (homeRef.current) {
      homeRef.current.style.backgroundImage = `url(${backgroundHome})`;
      homeRef.current.style.backgroundSize = "cover"; // optional
      homeRef.current.style.backgroundRepeat = "no-repeat"; // optional
      homeRef.current.style.backgroundPosition = "center"; // optional
    }
  }, []);

  return (
    <div ref={homeRef} className="home-outer-container">
      <h1 className="home-heading">Welcome to Elsie's World</h1>
      <p>Watch her grow, giggle, and shine!</p>
    </div>
  );
};

export default Home;

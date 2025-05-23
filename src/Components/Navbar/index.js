import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useContext, useRef, useEffect, useState } from "react";
import { Link } from "react-router";

import backgroundHome from "../../Pictures/HomePageBackground/backgroundHome.png";
import NavContext from "../../Context/Navcontext";

import "./index.css";

const navBarList = [
  {
    id: 1,
    name: "First Month",
    path: "/first-month",
  },
  {
    id: 2,
    name: "Second Month",
    path: "/second-month",
  },
  {
    id: 3,
    name: "Third Month",
    path: "/third-month",
  },
  {
    id: 4,
    name: "Fourth Month",
    path: "/fourth-month",
  },
  {
    id: 5,
    name: "Fifth Month",
    path: "/fifth-month",
  },
  {
    id: 6,
    name: "Sixth Month",
    path: "/sixth-month",
  },
  {
    id: 7,
    name: "Seventh Month",
    path: "/seventh-month",
  },
  {
    id: 8,
    name: "Eigth Month",
    path: "/eight-month ",
  },
  {
    id: 9,
    name: "Ninth Month",
    path: "/ninth-month",
  },
  {
    id: 10,
    name: "Tenth Month",
    path: "tenth-month",
  },
];

const Navbar = () => {
  const [isMenuClick, updateIconClick] = useState(false);

  const navRef = useRef(null);

  const { isClick, updateViewContext } = useContext(NavContext);

  useEffect(() => {
    if (isClick) {
      updateIconClick(true);
    } else {
      updateIconClick(false);
    }
  }, [isClick]);

  useEffect(() => {
    if (navRef.current) {
      navRef.current.style.backgroundImage = `url(${backgroundHome})`;
      navRef.current.style.backgroundSize = "cover";
      navRef.current.style.backgroundRepeat = "no-repeat";
      navRef.current.style.backgroundPosition = "center";
    }
  }, []);

  const onMenu = () => {
    updateIconClick((prev) => !prev);
    updateViewContext(false);
  };

  const NavItem = (props) => {
    const { eachnav } = props;
    const { name, path } = eachnav;
    return (
      <Link className="nav-link" to={path}>
        <p onClick={onMenu} className="month-para">
          {name}
        </p>
      </Link>
    );
  };

  return (
    <nav ref={navRef} className="nav-container">
      <div className="first-container">
        <Link className="link-heaing" to="/">
          <h1 className="nav-heading">Elsie</h1>
        </Link>
        <div className="icon-container">
          {isMenuClick ? (
            <RxCross2 className="icon-nav" onClick={onMenu} />
          ) : (
            <IoMdMenu className="icon-nav" onClick={onMenu} />
          )}
        </div>
      </div>
      {isMenuClick && (
        <div className="second-container">
          {navBarList.map((eachitem) => (
            <NavItem eachnav={eachitem} key={eachitem.id} />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

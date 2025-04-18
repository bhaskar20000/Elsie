import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router";

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
];

const Navbar = () => {
  const [isMenuClick, updateIconClick] = useState(false);

  const onMenu = () => {
    updateIconClick((prev) => !prev);
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
    <nav className="nav-container">
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

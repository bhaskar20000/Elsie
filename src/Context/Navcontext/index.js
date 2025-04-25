import React from "react";

const NavContext = React.createContext({
  isClick: false,
  updateViewContext: () => {},
});

export default NavContext;

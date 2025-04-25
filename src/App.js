import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Navbar from "./Components/Navbar";
import FirstMonth from "./Components/FirstMonth";
import SecondMonth from "./Components/SecondMonth";
import ThirdMonth from "./Components/ThirdMonth";
import FourthMonth from "./Components/FourthMonth";
import FifthMonth from "./Components/FifthMonth";
import SixthMonth from "./Components/SixthMonth";
import SeventhMonth from "./Components/SeventhMonth";
import EightMonth from "./Components/EightMonth";
import NinthMonth from "./Components/NinthMonth";
import TenthMonth from "./Components/TenthMonth";
import Home from "./Components/Home";
import NavContext from "../src/Context/Navcontext";

import "./App.css";

const App = () => {
  const [clickStatus, viewMoreUpdate] = useState(false);

  const callStateUpdate = (value) => {
    viewMoreUpdate(value);
  };

  return (
    <NavContext.Provider
      value={{
        isClick: clickStatus,
        updateViewContext: callStateUpdate,
      }}
    >
      <div className="outer-app-container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/first-month" element={<FirstMonth />} />
            <Route path="/second-month" element={<SecondMonth />} />
            <Route path="/third-month" element={<ThirdMonth />} />
            <Route path="/fourth-month" element={<FourthMonth />} />
            <Route path="/fifth-month" element={<FifthMonth />} />
            <Route path="/sixth-month" element={<SixthMonth />} />
            <Route path="/seventh-month" element={<SeventhMonth />} />
            <Route path="/eight-month" element={<EightMonth />} />
            <Route path="/ninth-month" element={<NinthMonth />} />
            <Route path="/tenth-month" element={<TenthMonth />} />
          </Routes>
        </BrowserRouter>
      </div>
    </NavContext.Provider>
  );
};

export default App;

import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import FirstMonth from "./Components/FirstMonth";
import SecondMonth from "./Components/SecondMonth";
import ThirdMonth from "./Components/ThirdMonth";
import FourthMonth from "./Components/FourthMonth";
import Home from "./Components/Home";

import "./App.css";

const App = () => {
  return (
    <div className="outer-app-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first-month" element={<FirstMonth />} />
          <Route path="/second-month" element={<SecondMonth />} />
          <Route path="/third-month" element={<ThirdMonth />} />
          <Route path="/fourth-month" element={<FourthMonth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

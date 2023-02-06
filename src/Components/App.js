import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useWindowSize from "../Hooks/useWindowSize.js";
import Business from "../Pages/Business";
import Developer from "../Pages/Developer";
import Help from "../Pages/Help";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Personal from "../Pages/Personal";
import Signup from "../Pages/Signup";
import "../Styles/App.css";
import NavBar from "./NavBar";
import NavMenu from "./NavMenu";

function App() {
  // use state to toggle mobile menu
  const [showMenu, setShowMenu] = useState(false);
  // use custom hook to get viewport width
  const { width } = useWindowSize();

  return (
    <BrowserRouter>
      <NavBar showMenu={showMenu} setShowMenu={setShowMenu} />
      {width < 800 && <NavMenu showMenu={showMenu} width={width} />}
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="Personal" element={<Personal />} />
          <Route path="Business" element={<Business />} />
          <Route path="Developer" element={<Developer />} />
          <Route path="Help" element={<Help />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

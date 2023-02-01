import { BrowserRouter, Route, Routes } from "react-router-dom";
import Business from "../Pages/Business";
import Developer from "../Pages/Developer";
import Help from "../Pages/Help";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Personal from "../Pages/Personal";
import Signup from "../Pages/Signup";
import NavBar from "./NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="Personal" element={<Personal />} />
          <Route path="Business" element={<Business />} />
          <Route path="Developer" element={<Developer />} />
          <Route path="Help" element={<Help />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

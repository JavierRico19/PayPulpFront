import { NavLink } from "react-router-dom";
import logo from "../Assets/Paypulptr.png";
import "../Styles/NavBar.css";

export default function NavBar() {
  return (
    <div>
      <nav>
        <div className="NavBar">
          <div className="logo">
            <NavLink to="">
              <img src={logo} width="210" height="70" alt="PayPulp logo" />
            </NavLink>
          </div>
          <div className="navboth">
            <div className="nav1">
              <NavLink to="/personal">
                <span>Personal</span>
              </NavLink>
              <NavLink to="/business">
                <span>Business</span>
              </NavLink>
              <NavLink to="/developer">
                <span>Developer</span>
              </NavLink>
              <NavLink to="/help">
                <span>Help</span>
              </NavLink>
            </div>
            <div className="nav2">
              <NavLink to="/login">
                <button className="button1" variant="outlined">
                  Log In
                </button>
              </NavLink>
              <NavLink to="/signup">
                <button>Sign Up</button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

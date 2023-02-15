import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { userContext } from "../Context/UserContext";

function NavMenu({ showMenu, width }) {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(userContext);

  const signOut = () => {
    localStorage.clear();
    setUserInfo({});
    navigate("");
  };


  return (
    <div
      className={
        width < 1000
          ? `nav-menu-mobile ${showMenu ? "nav-menu-show" : "nav-menu-hide"}`
          : "nav-menu-desktop"
      }
    >
      <div className={width > 1000 ? "nav-links" : null}>
        {!localStorage.getItem("token") && (
          <>
            <NavLink to="personal">
              <span>Personal</span>
            </NavLink>
            <NavLink to="business">
              <span>Business</span>
            </NavLink>
            <NavLink to="developer">
              <span>Developer</span>
            </NavLink>
            <NavLink to="help">
              <span>Help</span>
            </NavLink>
          </>
        )}
        {localStorage.getItem("token") && userInfo?.accountType === "personal" && (
          <>
            <NavLink to="dashboard">
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="business">
              <span>Business</span>
            </NavLink>
            <NavLink to="developer">
              <span>Developer</span>
            </NavLink>
            <NavLink to="help">
              <span>Help</span>
            </NavLink>
          </>
        )}
      </div>
      <div className="auth-btns-container">
        {localStorage.getItem("token") ? (
          <NavLink to="login">
            <button className="round-btns blue-btn" onClick={signOut}>
              Sign Out
            </button>
          </NavLink>
        ) : (
          <>
            <NavLink to="login">
              <button className="round-btns blue-btn">Log In</button>
            </NavLink>
            <NavLink to="signup">
              <button className="round-btns white-btn">Sign Up</button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default NavMenu;

import { NavLink } from "react-router-dom";

function NavMenu({ showMenu, width }) {
  return (
    <div
      className={
        width < 800
          ? `nav-menu-mobile ${showMenu ? "nav-menu-show" : "nav-menu-hide"}`
          : "nav-menu-desktop"
      }
    >
      <div className={width > 800 ? "nav-links" : null}>
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
      <div className="auth-btns-container">
        <NavLink to="/login">
          <button className="auth-btns login-btn">Log In</button>
        </NavLink>
        <NavLink to="/signup">
          <button className="auth-btns signup-btn">Sign Up</button>
        </NavLink>
      </div>
    </div>
  );
}

export default NavMenu;
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { ClickAwayListener } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Paypulptr.png";
import useWindowSize from "../Hooks/useWindowSize.js";
import "../Styles/NavBar.css";
import NavMenu from "./NavMenu";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowSize();

  return (
    <>
      <nav>
        <NavLink to="/">
          <img className="logo" src={Logo} alt="PayPulp logo" />
        </NavLink>
        {width < 800 ? (
          <ClickAwayListener onClickAway={() => setShowMenu(false)}>
            <div onClick={() => setShowMenu(!showMenu)}>
              <MenuOpenIcon className="menu-icon" fontSize="large" />
              <NavMenu
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                width={width}
              />
            </div>
          </ClickAwayListener>
        ) : (
          <NavMenu width={width} />
        )}
      </nav>
    </>
  );
}

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { ClickAwayListener } from "@mui/material";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Paypulptr.png";
import useWindowSize from "../Hooks/useWindowSize.js";
import "../Styles/NavBar.css";
import NavMenu from "./NavMenu";
import { userContext } from "../Context/UserContext"

export default function NavBar() {
  // toggle mobile menu
  const [showMenu, setShowMenu] = useState(false);
  // get viewport width
  const { width } = useWindowSize();

  const { userInfo } = useContext(userContext);

  /**
   * - ClickAwayListener close mobile menu on click outside navbar
   * - nav onClick close mobile menu on click inside
   * - MenuOpenIcon only displays on mobile
   */
  return (
    <ClickAwayListener onClickAway={() => setShowMenu(false)}>
      <nav onClick={() => showMenu === true && setShowMenu(!showMenu)}>
        <NavLink to="">
          <img className="logo" src={Logo} alt="PayPulp logo" />
        </NavLink>
        {width < 1000 && (
          <MenuOpenIcon
            className="menu-icon"
            fontSize="large"
            onClick={() => setShowMenu(true)}
          />
        )}
        <NavMenu showMenu={showMenu} setShowMenu={setShowMenu} width={width} />
      </nav>
    </ClickAwayListener>
  );
}

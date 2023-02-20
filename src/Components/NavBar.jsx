import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Avatar, ClickAwayListener } from "@mui/material";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Paypulptr.png";
import { userContext } from "../Context/UserContext";
import useWindowSize from "../Hooks/useWindowSize.js";
import "../Styles/NavBar.css";
import NavMenu from "./NavMenu";

export default function NavBar() {
  // toggle mobile menu
  const [showMenu, setShowMenu] = useState(false);
  // get viewport width
  const { width } = useWindowSize();
  const { userInfo } = useContext(userContext);

  // turn a string to hex color
  const stringToColor = (string) => {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

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
        {width < 1000 &&
          (!localStorage.getItem("token") ? (
            <MenuOpenIcon
              className="menu-icon"
              fontSize="large"
              onClick={() => setShowMenu(true)}
            />
          ) : (
            <Avatar
              className="nav-avatar"
              // sx={userInfo && { bgcolor: stringToColor(userInfo.email) }}
              onClick={() => setShowMenu(true)}
            >
              {/* {userInfo &&
                userInfo.email[0].toUpperCase() +
                  userInfo.userUuid[0].toUpperCase()} */}
            </Avatar>
          ))}
        <NavMenu showMenu={showMenu} width={width} />
      </nav>
    </ClickAwayListener>
  );
}

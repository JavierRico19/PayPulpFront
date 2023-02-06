import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Paypulptr.png";
import useWindowSize from "../Hooks/useWindowSize.js";
import "../Styles/NavBar.css";
import NavMenu from "./NavMenu";

export default function NavBar({ showMenu, setShowMenu }) {
  const { width } = useWindowSize();
  
  return (
    <>
      <nav>
        <NavLink to="/">
          <img className="logo" src={Logo} alt="PayPulp logo" />
        </NavLink>
        {width < 800 ? (
          <MenuOpenIcon
            className="menu-icon"
            fontSize="large"
            onClick={() => setShowMenu(!showMenu)}
          />
        ) : (
          <NavMenu width={width} />
        )}
      </nav>
    </>
  );
}

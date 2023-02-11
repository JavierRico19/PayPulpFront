import { Outlet } from "react-router-dom";
import UserContext from "../Context/UserContext";
import NavBar from "./NavBar";

const MainApp = () => {
  return (
    <UserContext>
      <main>
        <NavBar />
        <Outlet />
      </main>
    </UserContext>
  );
};

export default MainApp;

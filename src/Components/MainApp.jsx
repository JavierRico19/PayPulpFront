import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const MainApp = () => {
  return (
      <main>
        <NavBar />
        <Outlet />
      </main>
  );
};

export default MainApp;

import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { userContext } from "../Context/UserContext";

const MainApp = () => {
const { userInfo } = useContext(userContext);

  // if user is logged in, clear token from localStorage
  useEffect(() => {
    if (localStorage.getItem("token") && userInfo.length === 0) {
     localStorage.clear();
    }
  }, [])
  
  return (
      <main>
        <NavBar />
        <Outlet />
      </main>
  );
};

export default MainApp;

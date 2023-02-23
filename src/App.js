import { useContext, useEffect } from "react";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import MainApp from "./Components/MainApp";
import { userContext } from "./Context/UserContext";
import Business from "./Pages/Business";
import Dashboard from "./Pages/Dashboard";
import Developer from "./Pages/Developer";
import FakeStore from "./Pages/FakeStore";
import Help from "./Pages/Help";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import PaymentView from "./Pages/PaymentView.jsx";
import Personal from "./Pages/Personal";
import Signup from "./Pages/Signup";
import UserInfo from "./Services/User";
import "./Styles/App.css";

const checkForToken = () => {
  if (!localStorage.getItem("token")) {
    throw redirect("/login");
  }
  return null;
};

const loginLoader = ({ params }) => {
  if (localStorage.getItem("token")) {
    throw redirect("/dashboard");
  }
  return params = { isOnGateway: false }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "personal",
        element: <Personal />,
      },
      {
        path: "business",
        element: <Business />,
      },
      {
        path: "developer",
        element: <Developer />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "login",
        loader: loginLoader,
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "",
        loader: checkForToken, // protected routes
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
  {
    path: "gateway/:productUuid",
    loader: ({ params }) => (params = { ...params, isOnGateway: true }),
    element: <PaymentView />,
  },
  {
    path: "fakestore",
    element: <FakeStore />,
  },
]);

function App() {
  const { userInfo, setUserInfo } = useContext(userContext);
  // if token is active, get customer info
  useEffect(() => {
    if (localStorage.getItem("token") && Object.keys(userInfo).length === 0) {
      const getUserInfo = async () => {
        const res = await UserInfo.getUserInfo();
        setUserInfo(res.data);
      };
      getUserInfo();
    }
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContext from "../Context/UserContext";
import Business from "../Pages/Business";
import Dashboard from "../Pages/Dashboard";
import Developer from "../Pages/Developer";
import Help from "../Pages/Help";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Personal from "../Pages/Personal";
import Signup from "../Pages/Signup";
import "../Styles/App.css";
import MainApp from "./MainApp";
import PaymentView from "../Pages/PaymentView.jsx"
import FakeStore from "../Pages/FakeStore";

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
        loader: ({ params }) => (params = { isOnGateway: false }),
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
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
  return (
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  );
}

export default App;

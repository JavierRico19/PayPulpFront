import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Business from "../Pages/Business";
import Developer from "../Pages/Developer";
import Help from "../Pages/Help";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PaymentView from "../Pages/PaymentView";
import Personal from "../Pages/Personal";
import Signup from "../Pages/Signup";
import "../Styles/App.css";
import ConfirmPurchase from "./ConfirmPurchase";
import MainApp from "./MainApp";

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
        loader: ({params}) => params = { isOnGateway: false},
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "gateway/:productUuid/:redirUrl",
    loader: ({params}) => params = { ...params, isOnGateway: true},
    element: <PaymentView />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

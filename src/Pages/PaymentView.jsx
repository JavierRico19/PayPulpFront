import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Logo from "../Assets/Paypulptr.png";
import ConfirmPurchase from "../Components/ConfirmPurchase";
import PaymentError from "../Components/PaymentError";
import PaymentGateway from "../Services/PaymentGateway";
import "../Styles/PaymentView.css";
import Login from "./Login";

const PaymentView = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const { productUuid, redirect } = useLoaderData();

  useEffect(() => {
    if (isAuth) {
      const getProduct = async () => {
        // const res = await PaymentGateway.getProduct(productUuid);
        setProduct({ name: "Rainbow Wand", price: 200 });
      };
      getProduct();
    }
  }, [isAuth]);

  return (
    <div className="vp">
      <div className="pay-bar">
        <img className="logo" src={Logo} alt="PayPulp logo" />
      </div>
      {!isAuth && (
        <Login setIsAuth={setIsAuth} setUser={setUser} setError={setError} />
      )}
      {isAuth && !error && (
        <ConfirmPurchase
          productUuid={productUuid}
          redirect={redirect}
          product={product}
          user={user}
        />
      )}
      {error && <PaymentError />}
    </div>
  );
};

export default PaymentView;

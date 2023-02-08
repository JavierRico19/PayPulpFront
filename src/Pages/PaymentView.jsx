import { useEffect, useState } from "react";
import { redirect, useLoaderData, useSearchParams } from "react-router-dom";
import Logo from "../Assets/Paypulptr.png";
import ConfirmPurchase from "../Components/ConfirmPurchase";
import Submitting from "../Components/Submitting";
import PaymentGateway from "../Services/PaymentGateway";
import "../Styles/PaymentView.css";
import Login from "./Login";

const PaymentView = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);
  const [submitState, setSubmitState] = useState(null);
  const { productUuid } = useLoaderData();
  const [searchParams] = useSearchParams();
  // console.log(searchParams);

  useEffect(() => {
    if (isAuth) {
      const getProduct = async () => {
        // const res = await PaymentGateway.getProduct(productUuid);
        setProduct({ uuid: "abc123", name: "Rainbow Wand", price: 200 });
      };
      getProduct();
    }

    if (submitState === "success") {
      const redirUrl = searchParams.get("redirecturl");
      console.log(redirUrl);
      setTimeout(window.location.replace(`http://${redirUrl}`), 4000);
    }
  }, [isAuth, submitState]);

  const goBack = () => {
    setIsAuth(false);
    setProduct(null);
    setUser(null);
    setSubmitState(null);
  };

  return (
    <div className="vp">
      <div className="pay-bar">
        <img className="logo" src={Logo} alt="PayPulp logo" />
      </div>
      {!isAuth && !submitState && (
        <Login setIsAuth={setIsAuth} setUser={setUser} />
      )}
      {isAuth && !submitState && (
        <ConfirmPurchase
          product={product}
          user={user}
          setSubmitState={setSubmitState}
        />
      )}
      {submitState && (
        <Submitting
          submitState={submitState}
          goBack={goBack}
          location="gateway"
        />
      )}
    </div>
  );
};

export default PaymentView;

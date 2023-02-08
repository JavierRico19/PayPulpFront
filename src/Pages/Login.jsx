import { useState } from "react";
import { useForm } from "react-hook-form";
import { redirect, useLoaderData } from "react-router-dom";
import Logo from "../Assets/logo-blue.png";
import LoginCard from "../Components/LoginCard";
import Auth from "../Services/Auth";
import "../Styles/Auth.css";

const Login = ({ setIsAuth, setUser }) => {
  const params = useLoaderData();
  const [loginError, setLoginError] = useState(null)
  const {
    register,
    handleSubmit,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (userData) => {
    
    // auth req
    try {
      // const res = await Auth.login(userData);
    } catch (error) {
      setLoginError(true);
      return;
    }


    // update payment view  
    if (params.isOnGateway) {
      setIsAuth(true);
      setUser("abcd"); // has to set user info returned by the API
    }


    // -- if user auth ok & on main app --
    // if (res === 200 && !params.isOnGateway) {
    // redirect("/dashboard");
    // };

    // -- user auth ok & external redirect --
    // -- -- userUuid depends on final bakend response
    // if (res === 200 && params.isOnGateway) {
    //   const { productUuid, redirUrl } = params;
    //   redirect(`/gateway/payment/${productUuid}/${redirUrl}/${res.userUuid}`)
    // };
  };

  return (
    <div className="auth">
      <img className="login-logo" src={Logo} alt="PayPulp logo" />
      <LoginCard
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        loginError={loginError}
      />
    </div>
  );
};

export default Login;

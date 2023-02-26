import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import LoginCard from "../Components/LoginCard";
import useLogin from "../Hooks/useLogin";
import Auth from "../Services/Auth";
import "../Styles/Auth.css";
// import { userContext } from "../Context/UserContext";

const Login = ({ setIsAuth }) => {
  const params = useLoaderData(); // get query params (if logging on gateway or main app)
  // const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    mode: "onTouched",
    defaultValues: {
      email: "masairl@mail.com",
      password: "1234",
    },
  });
  const { loginError, onSubmit } = useLogin(params.isOnGateway, setIsAuth)


  // if user is logged in and tries to access login page
  // useEffect(() => {
  //   if (localStorage.getItem("token") && !params.isOnGateway) navigate(-1);
  // }, [])

  return (
    <div className="auth">
      <div className="auth-paper">
        <h2 className="auth-title">Log In</h2>
        <LoginCard
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          loginError={loginError}
        />
      </div>
    </div>
  );
};

export default Login;

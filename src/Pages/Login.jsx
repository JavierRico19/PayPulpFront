import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import LoginCard from "../Components/LoginCard";
import Auth from "../Services/Auth";
import "../Styles/Auth.css";
import { userContext } from "../Context/UserContext";

const Login = ({ setIsAuth }) => {
  const params = useLoaderData(); // get query params
  const [loginError, setLoginError] = useState(null);
  const { setUserInfo } = useContext(userContext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    mode: "onTouched",
    defaultValues: {
      email: "masairl@mail.com",
      password: "1234",
    },
  });

  useEffect(() => {
    // if user is logged in and tries to access login page
    if (localStorage.getItem("token") && !params.isOnGateway) navigate(-1);
    // if (localStorage.getItem("token") && !params.isOnGateway) navigate(-1);
  }, [])
  

  const onSubmit = async (userData) => {
    // auth req
    try {
      const res = await Auth.login(userData);
      if (res.status === 200) {
        console.log("auth")
        setUserInfo(res.data.userInfo);
        localStorage.setItem("token", res.data.token);
        if (params.isOnGateway) {
          setIsAuth(true);
        } else {
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.log(error);
      setLoginError(true);
    }
  };

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

import { useContext, useState } from "react";
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

  const onSubmit = async (userData) => {
    // auth req
    try {
      const res = await Auth.login(userData);
      setUserInfo(res);
      console.log(res.data);
      if (res.status === 200) {
        const userInfo = {
          userEmail: res.data.userEmail,
          userType: res.data.userType, // should be account type
          userUuid: res.data.userUuid,
        };
        setUserInfo(userInfo);
        if (params.isOnGateway) {
          setIsAuth(true);
        } else {
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.err(error);
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

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../Context/UserContext";
import Auth from "../Services/Auth";


export default function useLogin(isOnGateway, setIsAuth) {
  const { setUserInfo } = useContext(userContext);
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") && !isOnGateway) navigate(-1);
  }, [])

  const onSubmit = async (userData) => {
      // auth req
      try {
        const res = await Auth.login(userData);
        if (res.status === 200) {
          setUserInfo(res.data.userInfo);
          localStorage.setItem("token", res.data.token);
          if (isOnGateway) {
            setIsAuth(true);
          } else {
            navigate("/dashboard");
          }
          return res.status
        }
      } catch (error) {
        console.log(error);
        setLoginError(true);
      }
    };

    return { loginError, onSubmit };
}
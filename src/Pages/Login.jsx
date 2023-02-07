import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Logo from "../Assets/logo-blue.png";
import LoginCard from "../Components/LoginCard";
import Auth from "../Services/Auth";
import "../Styles/Auth.css";

const Login = ({ setIsAuth, setUser, setError }) => {
  const params = useLoaderData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (userData) => {
    try {
      // const res = await Auth.login(userData);
    } catch (error) {
      setError(true);
    }
    // -- if user auth ok & on main app --
    // if (res === 200 && !params.isOnGateway) {
    //   redirect("/dashboard");
    // };

    // -- user auth ok & external redirect --
    // -- -- userUuid depends on final bakend response
    // if (res === 200 && params.isOnGateway) {
    //   const { productUuid, redirUrl } = params;
    //   redirect(`/gateway/payment/${productUuid}/${redirUrl}/${res.userUuid}`)
    // };
    if (true) {
      setIsAuth(true);
      setUser("abcd");
      // setError(true);
    };
  };

  return (
    <div className="auth">
      <img className="login-logo" src={Logo} alt="PayPulp logo" />
      <LoginCard
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
    </div>
  );
};

export default Login;

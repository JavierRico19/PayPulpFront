import "../Styles/Auth.css";
import Logo from "../Assets/logo-blue.png";
import { useForm } from "react-hook-form";

const Login = () => {
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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="auth">
      <img className="login-logo" src={Logo} alt="PayPulp logo" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="auth-card">
          <label htmlFor="email">Email</label>
          <input
            className={`text-input ${errors.email && "input-error"}`}
            type="text"
            {...register("email")}
          />
          <label htmlFor="password">Password</label>
          <input
            className={`text-input ${errors.password && "input-error"}`}
            type="password"
            {...register("password")}
          />
          <div className="auth-btns">
            <button
              className="round-btns blue-btn btn-on-main"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Login;

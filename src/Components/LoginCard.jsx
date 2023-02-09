import AuthError from "./AuthError";

const LoginCard = ({ register, handleSubmit, onSubmit, loginError }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="auth-card">
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input className="text-input" type="text" {...register("email")} />
          <p className="spacer"></p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            className="text-input"
            type="password"
            {...register("password")}
          />
        </div>
        <div className="auth-btns">
          <button
            className="round-btns blue-btn btn-on-main"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        {loginError && <AuthError />}
      </section>
    </form>
  );
};

export default LoginCard;

const LoginCard = ({ register, handleSubmit, onSubmit, errors}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="auth-card">
        <label htmlFor="email">Email</label>
        <input className="text-input" type="text" {...register("email")} />
        <label htmlFor="password">Password</label>
        <input
          className="text-input"
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
  );
};

export default LoginCard;

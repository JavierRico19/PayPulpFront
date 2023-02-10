const SignUp2 = ({
  register,
  setPage,
  watch,
  errors,
  isValid,
  handleSubmit, // FOR TEST ONLY
}) => {
  return (
    <>
      {/* <section className="auth-card"> */}
        <div className="input-wrapper">
          <label htmlFor="firstName">First name:</label>
          <input
            className={`text-input ${errors.firstName && "input-error"}`}
            type="text"
            {...register("firstName", {
              required: "Field required",
              minLength: {
                value: 2,
                message: "This field should be at least 2 characters long",
              },
              maxLength: {
                value: 50,
                message: "This field should be less than 50 characters long",
              },
              // pattern: { value: /\w+{2,50}/g, message: "This field can only contain letters and/or numbers" },
            })}
          />
          <p className="input-error-text">{errors.firstName?.message}</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName">Last name:</label>
          <input
            className={`text-input ${errors.lastName && "input-error"}`}
            type="text"
            {...register("lastName", {
              required: "Field required",
              minLength: {
                value: 2,
                message: "This field should be at least 2 characters long",
              },
              maxLength: {
                value: 50,
                message: "This field should be less than 50 characters long",
              },
              // pattern: { value: /\w+/g, message: "This field can only contain letters and/or numbers" },
            })}
          />
          <p className="input-error-text">{errors.lastName?.message}</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email:</label>
          <input
            className={`text-input ${errors.email && "input-error"}`}
            type="text"
            {...register("email", {
              required: "Field required",
              maxLength: {
                value: 80,
                message: "This field should be less than 80 characters long",
              },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Not a valid email format",
              },
            })}
          />
          <p className="input-error-text">{errors.email?.message}</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password:</label>
          <input
            className={`text-input ${errors.password && "input-error"}`}
            type="text"
            {...register("password", {
              required: "Field required",
              minLength: {
                value: 8,
                message: "Password needs to be more than 8 characters",
              },
              maxLength: {
                value: 20,
                message: "Password needs to be less than 20 characters",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                message:
                  "Password needs at least one uppercase and one lowercase letter and one number",
              },
            })}
          />
          <p className="input-error-text">{errors.password?.message}</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input
            className={`text-input ${errors.confirmPassword && "input-error"}`}
            type="text"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                message: "Password doesn't match",
              },
              validate: (value) => value === watch("password"),
            })}
          />
          <p className="input-error-text">{errors.confirmPassword?.message}</p>
        </div>
        <div className="auth-btns">
          <button
            className="round-btns blue-btn btn-on-main"
            onClick={() => setPage(1)}
          >
            Previous
          </button>
          <button
            className="round-btns white-btn btn-on-main"
            onClick={() => /* setPage(3) */ handleSubmit()} // FOR TEST ONLY
            disabled={isValid ? false : true}
          >
            Next
          </button>
        </div>
      {/* </section> */}
    </>
  );
};

export default SignUp2;

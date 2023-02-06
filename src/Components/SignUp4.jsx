const SignUp4 = ({ register, setPage, errors, isValid, handleSubmit }) => {
  return (
    <>
      <section className="signup-card">
        <label htmlFor="securityQuestion">Security question:</label>
        <input
          className={`text-input ${errors.securityQuestion && "input-error"}`}
          type="text"
          {...register("securityQuestion", {
            required: "Field required",
            minLength: {
              value: 5,
              message: "This field should be at least 5 characters long",
            },
            maxLength: {
              value: 100,
              message: "This field should be less than 100 characters long",
            },
          })}
        />
        <p>{errors.securityQuestion?.message}</p>
        <label htmlFor="securityAnswer">Security answer:</label>
        <input
          className={`text-input ${errors.securityAnswer && "input-error"}`}
          type="text"
          {...register("securityAnswer", {
            required: "Field required",
            minLength: {
              value: 5,
              message: "This field should be at least 5 characters long",
            },
            maxLength: {
              value: 100,
              message: "This field should be less than 100 characters long",
            },
          })}
        />
        <p>{errors.securityAnswer?.message}</p>

        <div className="signup-btns">
          <button
            className="round-btns blue-btn btn-on-main"
            onClick={() => setPage(3)}
          >
            Previous
          </button>
          <button
            className="round-btns white-btn btn-on-main"
            onClick={() => handleSubmit()}
            disabled={isValid ? false : true}
          >
            Create account
          </button>
        </div>
      </section>
    </>
  );
};

export default SignUp4;

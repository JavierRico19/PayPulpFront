const SignUp4 = ({ register, setPage, errors, isValid, handleSubmit }) => {
  return (
    <>
      <section className="auth-card">
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
        <p className="input-error-text">{errors.securityQuestion?.message}</p>
        <label htmlFor="securityQuestionAnswer">Security answer:</label>
        <input
          className={`text-input ${errors.securityQuestionAnswer && "input-error"}`}
          type="text"
          {...register("securityQuestionAnswer", {
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
        <p className="input-error-text">{errors.securityQuestionAnswer?.message}</p>

        <div className="auth-btns">
          <button
            className="round-btns blue-btn btn-on-main"
            onClick={() => setPage(3)}
          >
            Previous
          </button>
          <button
            className="round-btns white-btn btn-on-main"
            // onClick={() => handleSubmit()}
            type="submit"
            disabled={isValid ? false : true}
          >
            Send
          </button>
        </div>
      </section>
    </>
  );
};

export default SignUp4;

const SignUp2 = ({ register, setPage, errors, isValid }) => {
  return (
    <>
      <section className="auth-card">
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
            // pattern: { value: /\w+/g, message: "This field can only contain letters and/or numbers" },
          })}
        />
        <p>{errors.firstName?.message}</p>
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
        <p>{errors.lastName?.message}</p>
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
        <p>{errors.email?.message}</p>
        <label htmlFor="phone">Phone number:</label>
        <input
          className={`text-input ${errors.phone && "input-error"}`}
          type="text"
          {...register("phone", {
            required: "Field required",
            maxLength: {
              value: 20,
              message: "This field should be less than 20 characters long",
            },
            pattern: { value: /^\d+$/, message: "Not a valid phone format" },
          })}
        />
        <p>{errors.phone?.message}</p>

        <div className="auth-btns">
          <button
            className="round-btns blue-btn btn-on-main"
            onClick={() => setPage(1)}
          >
            Previous
          </button>
          <button
            className="round-btns white-btn btn-on-main"
            onClick={() => setPage(3)}
            disabled={isValid ? false : true}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default SignUp2;

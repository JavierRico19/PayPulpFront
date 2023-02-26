const SignUp3 = ({ register, setPage, errors, isValid }) => {
  // get current date and format correctly for display as default value
  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const formatDate = `${year}-${month > 9 ? month : "0" + month}-${
      day > 9 ? day : "0" + day
    }`;
    return formatDate;
  };
  return (
    <>
      <section className="auth-card">
        <div className="input-wrapper">
          <label htmlFor="birthDate">Date of birth:</label>
          <input
            className={`text-input ${errors.birthDate && "input-error"}`}
            type="date"
            defaultValue={getCurrentDate()}
            {...register("birthDate", {
              required: "Field required",
              minLength: {
                value: 3,
                message: "This field should be at least 3 characters long",
              },
              maxLength: {
                value: 50,
                message: "This field should be less than 50 characters long",
              },
            })}
          />
          <p>{errors.birthDate?.message}</p>
        </div>
        <div className="input-wrapper">
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
          <p className="input-error-text">{errors.phone?.message}</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="address">Address:</label>
          <input
            className={`text-input ${errors.address && "input-error"}`}
            type="text"
            {...register("address", {
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
          <p className="input-error-text">{errors.address?.message}</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="city">City:</label>
          <input
            className={`text-input ${errors.city && "input-error"}`}
            type="text"
            {...register("city", {
              required: "Field required",
              minLength: {
                value: 5,
                message: "This field should be at least 5 characters long",
              },
              maxLength: {
                value: 50,
                message: "This field should be less than 50 characters long",
              },
            })}
          />
          <p className="input-error-text">{errors.city?.message}</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="country">Country:</label>
          <input
            className={`text-input ${errors.country && "input-error"}`}
            type="text"
            {...register("country", {
              required: "Field required",
              minLength: {
                value: 3,
                message: "This field should be at least 3 characters long",
              },
              maxLength: {
                value: 50,
                message: "This field should be less than 50 characters long",
              },
              // pattern
            })}
          />
          <p className="input-error-text">{errors.country?.message}</p>
        </div>
        <div className="auth-btns">
          <button
            className="round-btns blue-btn btn-on-main"
            onClick={() => setPage(2)}
          >
            Previous
          </button>
          <button
            className="round-btns white-btn btn-on-main"
            onClick={() => setPage(4)}
            disabled={isValid ? false : true}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default SignUp3;

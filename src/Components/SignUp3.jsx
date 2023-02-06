import { useEffect } from "react";

const SignUp3 = ({ register, setPage, errors, isValid }) => {
  return (
    <>
      <section className="signup-card">
        {/* <label htmlFor="birthDate">Date of birth:</label>
        <input
        className={`text-input ${errors.birthDate && "input-error"}`}
          type="text"
          {...register("birthDate", {
            required: "Field required",
            minLength: { value: 3, message: "This field should be at least 3 characters long" },
            maxLength: { value: 50, message: "This field should be less than 50 characters long" },
            // pattern
          })}
        />
        <p>{errors.birthDate?.message}</p> */}
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
        <p>{errors.address?.message}</p>
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
        <p>{errors.city?.message}</p>
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
        <p>{errors.country?.message}</p>

        <div className="signup-btns">
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

const CostumerInfo = ({ register, errors, userInfo }) => {
  return (
    <div className="profile-costumer-info">
      {/* <div className="input-wrapper">
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
      </div> */}
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
      <div className="input-wrapper">
        <label htmlFor="birthDate">Date of birth:</label>
        <input
          className={`text-input ${errors.birthDate && "input-error"}`}
          type="date"
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
    </div>
  );
};

export default CostumerInfo;

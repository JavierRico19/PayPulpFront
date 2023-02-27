const Input = ({ register, errors, type, name, label, watch=null }) => {
  const validation = {
    shortText: {
      required: "Field required",
      minLength: {
        value: 2,
        message: "This field should be at least 2 characters long",
      },
      maxLength: {
        value: 50,
        message: "This field should be less than 50 characters long",
      },
    },
    longText: {
      required: "Field required",
      minLength: {
        value: 5,
        message: "This field should be at least 5 characters long",
      },
      maxLength: {
        value: 100,
        message: "This field should be less than 100 characters long",
      },
    },
    email: {
      required: "Field required",
      maxLength: {
        value: 80,
        message: "This field should be less than 80 characters long",
      },
      pattern: {
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Not a valid email format",
      },
    },
    password: {
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
    },
    confirmPassword: {
      required: "Please confirm your password",
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        message: "Password doesn't match",
      },
      validate: (value) => value === watch("password"),
    },
    date: {
      required: "Field required",
      minLength: {
        value: 3,
        message: "This field should be at least 3 characters long",
      },
      maxLength: {
        value: 50,
        message: "This field should be less than 50 characters long",
      },
    },
    phone: {
      required: "Field required",
      maxLength: {
        value: 20,
        message: "This field should be less than 20 characters long",
      },
      pattern: { value: /^\d+$/, message: "Not a valid phone format" },
    },
  };
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        className={`text-input ${errors[name] && "input-error"}`}
        type={type === "date" ? "date" : "text"}
        {...register(name, validation[type])}
      />
      <p className="input-error-text">{errors[name]?.message}</p>
    </div>
  );
};

export default Input;

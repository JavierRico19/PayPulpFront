import CryptoJS from "crypto-js";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { redirect } from "react-router-dom";
import SignUp1 from "../Components/Signup/SignUp1";
import SignUp2 from "../Components/Signup/SignUp2";
import SignUp3 from "../Components/Signup/SignUp3";
import SignUp4 from "../Components/Signup/SignUp4";
import Submitting from "../Components/Submitting";
import "../Styles/Auth.css";

export default function Signup() {
  const [page, setPage] = useState(1);
  const [accountType, setAccountType] = useState(null);
  const [submitting, setSubmitting] = useState(null);

  /**
   * react-hook-form
   * -register handles input actions (onChange, validation, ...)
   * -handleSubmit
   * -formState keeps track of validation errors
   * -mode: onTouch verifies input: first after onBlur, then onChange
   * -default values sets defaults for every field
   */
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      securityQuestion: "",
      securityAnswer: "",
    },
  });

  // set submitting dialog and make post request
  const onSubmit = async (data) => {
    if (data) {
      delete data.confirmPassword;
      let encrypted = CryptoJS.MD5(data.password, "secret").toString();
      data = {
        ...data,
        password: encrypted,
        accountType: accountType,
      };
    }

    setSubmitting("waiting");
    try {
      // const res = await axios.post("http://localhost:3300/api/user");
      // if (res.status === 200) {
      //   setSubmitting("success");
      // }

      // just faking api call
      const success = () => setSubmitting("success");
      setTimeout(success, 3000);

      // wait for redirection
      // const redir = () => redirect("/dashboard");
      // setTimeout(redir, 3000);
    } catch (error) {
      setSubmitting("error");
      console.log(error);
    }
  };

  // go back to page 1 but keep info
  const goBack = () => {
    setPage(1);
    setAccountType(null);
    setSubmitting(null);
  };

  return (
    <div className="auth">
      <div className="auth-paper">
        <h2 className="auth-title">Sign up</h2>
        {submitting ? (
          <Submitting
            submitState={submitting}
            goBack={goBack}
            location="signup"
          />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            {page === 1 && (
              <SignUp1 setPage={setPage} setAccountType={setAccountType} />
            )}
            {page === 2 && (
              <SignUp2
                setPage={setPage}
                register={register}
                watch={watch}
                errors={errors}
                isValid={isValid}
                handleSubmit={handleSubmit} // FOR TEST ONLY
              />
            )}
            {page === 3 && (
              <SignUp3
                setPage={setPage}
                register={register}
                errors={errors}
                isValid={isValid}
              />
            )}
            {page === 4 && (
              <SignUp4
                setPage={setPage}
                register={register}
                errors={errors}
                isValid={isValid}
                handleSubmit={onSubmit}
              />
            )}
          </form>
        )}
      </div>
    </div>
  );
}

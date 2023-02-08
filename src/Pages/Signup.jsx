import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SignUp1 from "../Components/SignUp1";
import SignUp2 from "../Components/SignUp2";
import SignUp3 from "../Components/SignUp3";
import SignUp4 from "../Components/SignUp4";
import Submitting from "../Components/Submitting";
import "../Styles/Auth.css";

export default function Signup() {
  // multi-page form
  const [page, setPage] = useState(1);
  // select account type
  const [accountType, setAccountType] = useState(null);
  // when submitting show loading or error dialog
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
    try {
      setSubmitting("waiting");
      const res = await axios.post("http://localhost:3300/api/user");
      if (res.status === 200) {
        setSubmitting("success");
      }
      setSubmitting(null);
    } catch (error) {
      setSubmitting("error");
      console.log(error);
    }
  };

  // reset 
  const goBack = () => {
    console.log("goback")
    setPage(1);
    setAccountType(null);
    setSubmitting(null);
  }

  return (
    <>
      <div className="auth">
        <h2 className="auth-title">Sign up</h2>
        {submitting ? (
          <Submitting submitState={submitting} goBack={goBack} location="signup" />
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
    </>
  );
}

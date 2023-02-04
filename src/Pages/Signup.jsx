import { useState } from "react";
import ErrorMessage from "../Components/ErrorMessage";
import SignUp1 from "../Components/SignUp1";
import SignUp2 from "../Components/SignUp2";
import useForm from "../Hooks/useForm";
import "../Styles/Signup.css";

export default function Signup() {
  const [accountType, setAccountType] = useState(null);
  const [page, setPage] = useState(1);
  const [costumer, setCostumer] = useState({
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState(null);

  const form = useForm(costumer, setCostumer, setError);
  console.log(costumer);

  return (
    <>
      <div className="signup">
        <h2 className="signup-title">Sign up</h2>
        {page === 1 && (
          <SignUp1 setPage={setPage} setAccountType={setAccountType} />
        )}
        {page === 2 && <SignUp2 form={form} setPage={setPage} />}
        {page === 3 && <div>hello</div>}
        {error && <ErrorMessage error={error}>{error}</ErrorMessage>}
      </div>
    </>
  );
}

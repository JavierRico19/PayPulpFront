import { useState } from "react";
import SignUp1 from "../Components/SignUp1";
import "../Styles/Signup.css";

export default function Signup() {
  const [accountType, setAccountType] = useState(null);
  const [page, setPage] = useState(1);
  const [costumer, setCostumer] = useState({});

  return (
    <div className="signup">
      <h2 className="signup-title">Sign up</h2>
      {page === 1 && <SignUp1 setPage={setPage} setAccountType={setAccountType} /> }
      {page === 2 && <div>Hello</div> }
    </div>
  );
}

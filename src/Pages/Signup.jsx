import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "../Styles/Signup.css";

export default function Signup() {
  const [accountType, setAccountType] = useState("personal");
  const [page, setPage] = useState(1);

  return (
    <div>
      {/* {page === 1 && (
        <div>
          <div className="info">
            <Typography>Sign up to PayPulp!</Typography>
          </div>
          <div></div>
        </div>
      )} */}
    </div>
  );
}

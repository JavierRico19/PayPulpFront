import { Paper } from "@mui/material";
import { Container } from "@mui/system";
import { useLoaderData } from "react-router-dom";
import Logo from "../Assets/Paypulptr.png";
import "../Styles/PaymentView.css";

const PaymentView = (props) => {
  const params = useLoaderData();
  console.log(params);
  return (
    <div className="vp">
      <div className="pay-bar">
        <img className="logo" src={Logo} alt="PayPulp logo" />
      </div>
      <Container className="container">
        <Paper className="pay-info-container" elevation={3}>
          <div>You are purchasing ITEM</div>
          <div>Amount: XXXXX</div>
          <button className="round-btns blue-btn pay-btn">Confirm payment</button>
        </Paper>
      </Container>
    </div>
  );
};

export default PaymentView;

import { Container, Paper } from "@mui/material";
import Gateway from "../Services/PaymentGateway";

const ConfirmPurchase = ({ product, user, setSubmitState }) => {
  const confirmPayment =  () => {
    setSubmitState("waiting");
    try {
      const fakeWait = () =>  setSubmitState("success");
      setTimeout(fakeWait, 3000)
      // const res =  Gateway.confirmPayment(product.uuid, user.paymethod, user.uuid)
      
    } catch (error) {
      setSubmitState("error");
      console.log(error)
    }
  };

  return (
    <Container className="container">
      <Paper className="pay-info-container" elevation={3}>
        <div>
          <div>You are purchasing</div>
          <div>{product?.name}</div>
          <div>with payment method:</div>
          <div>{user?.paymentMethod}</div>
          <div>Amount: {product?.price}</div>
        </div>
        <button
          className="round-btns blue-btn pay-btn"
          onClick={confirmPayment}
        >
          Confirm payment
        </button>
      </Paper>
    </Container>
  );
};

export default ConfirmPurchase;

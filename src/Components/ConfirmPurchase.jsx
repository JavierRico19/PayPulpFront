import { Container, Paper } from "@mui/material"

const ConfirmPurchase = ({ productUuid, redirect, product, user }) => {
  const confirmPayment = () => {

  }

  return (
    <Container className="container">
        <Paper className="pay-info-container" elevation={3}>
          <div>You are purchasing {product?.name}</div>
          <div>Amount: {product?.price}</div>
          <button className="round-btns blue-btn pay-btn" onClick={confirmPayment}>Confirm payment</button>
        </Paper>
      </Container>
  )
}

export default ConfirmPurchase
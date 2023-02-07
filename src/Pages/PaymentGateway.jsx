import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaymentView from "../Components/PaymentView";

const PaymentGateway = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/payment/:businessId"
          // path="/payment/:businessId/:personalId/:payUuid/:productUuid/:amount"
          element={<PaymentView />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default PaymentGateway;

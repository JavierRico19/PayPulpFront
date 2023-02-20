import axios from "axios";

class Transactions {
  static getTransactions = async (userUuid, amount) => {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/transaction/${userUuid}`
    );
    return res;
  };
}

export default Transactions;

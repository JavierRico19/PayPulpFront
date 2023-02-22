import axios from "axios";

class Gateway {
  static getProduct = async (productUuid) => {
    // try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/product/${productUuid}`);
      if (res.status === 200) {
        return res
      }
    // } catch (error) {
    //   console.log(error);
    // }
  }

  static confirmPayment = async (transactionInfo) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/transaction`, transactionInfo);
      console.log(transactionInfo, res)
      if (res.status === 200) {
        return res
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default Gateway;
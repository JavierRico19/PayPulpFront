import axios from "axios";

class Gateway {
  static getProduct = async (productUuid) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/${productUuid}`);
      if (res.status === 200) {
        return res
      }
    } catch (error) {
      console.log(error);
    }
  }

  static confirmPayment = async (productUuid, userUuid) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/transactions/${productUuid}`);
      if (res.status === 200) {
        return res
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default Gateway;
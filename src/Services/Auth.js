import axios from "axios";

class Auth {
  static login = async (userData) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/login`,
        userData
      );
      if (res.status === 200) {
        return res;
      }
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default Auth;

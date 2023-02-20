import { createContext, useState } from "react";

export const userContext = createContext(null);

const UserContext = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [transactions, setTransactions] = useState([]);
  // console.log("context", userInfo, transactions)
  return (
    <userContext.Provider
      value={{ userInfo, setUserInfo, transactions, setTransactions }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserContext;

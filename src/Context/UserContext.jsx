import { createContext, useState } from 'react';

export const userContext = createContext(null);

const UserContext = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <userContext.Provider value={{userInfo, setUserInfo}}>
     {children}
    </userContext.Provider>
  )
}

export default UserContext
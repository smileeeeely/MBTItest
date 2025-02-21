import { createContext, useState } from "react";

export const UserLoginContext = createContext();

const UserLoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  return (
    <UserLoginContext.Provider value={{ isLogin, setIsLogin, user, setUser }}>
      {children}
    </UserLoginContext.Provider>
  );
};

export default UserLoginProvider;

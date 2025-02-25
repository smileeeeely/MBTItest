import { createContext, useState } from "react";

export const UserLoginContext = createContext();

const token = localStorage.getItem("accessToken");

const UserLoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(!!token);
  const [user, setUser] = useState({});

  const loginState = (token) => {
    localStorage.setItem("accessToken", token);
    setIsLogin(true);
  }

  const logoutState = () => {
    localStorage.removeItem("accessToken");
    setIsLogin(false);
  }

  return (
    <UserLoginContext.Provider value={{ isLogin, setIsLogin, user, setUser, loginState, logoutState }}>
      {children}
    </UserLoginContext.Provider>
  );
};

export default UserLoginProvider;

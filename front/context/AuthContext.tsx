import React, { createContext, ReactNode, useState } from "react";

type authContextType = {
  isLogin: boolean;
  userToken: string | null;
  login: () => void;
  logout: () => void;
};

type Props = {
  children: ReactNode;
};
const authContextDefaultValues: authContextType = {
  isLogin: false,
  userToken: null,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext<authContextType>(authContextDefaultValues);

const AuthProvider = ({ children }: Props) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string | null>(null);

  const login = () => {
    setIsLogin(true);
    setUserToken("asdasdasd");
  };

  const logout = () => {
    setUserToken(null);
    setIsLogin(false);
  };

  const value = {
    isLogin,
    userToken,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

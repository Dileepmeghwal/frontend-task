import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logOut: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = (useState = null);

  const login = (userName) => {
    setUser({ userName });
  };

  const logOut = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

"use client";

const { createContext, useState } = require("react");

const AuthModalContext = createContext();

const AuthModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <AuthModalContext.Provider value={{ open, setOpen }}>
      {children}
    </AuthModalContext.Provider>
  );
};

export { AuthModalProvider, AuthModalContext };

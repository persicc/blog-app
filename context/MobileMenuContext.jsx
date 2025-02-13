"use client";

import { createContext, useState } from "react";

const MobileMenuContext = createContext(false);

const MobileMenuContextProvider = ({ children }) => {
  const [moibleMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!moibleMenuOpen);
  };

  return (
    <MobileMenuContext.Provider value={{ moibleMenuOpen, toggleMobileMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export { MobileMenuContext, MobileMenuContextProvider };

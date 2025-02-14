const { createContext, useState } = require("react");

const MobileMenuContext = createContext();

const MobileMenuProvider = ({ children }) => {
  const [open, setOpen] = useState("");

  const toggleMobileMenu = () => {
    setOpen(!open);
  };

  return (
    <MobileMenuContext.Provider value={{ open, toggleMobileMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export { MobileMenuContext, MobileMenuProvider };

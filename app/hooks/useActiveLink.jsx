import { createContext, useContext, useState } from 'react';
import PropTypes from "prop-types";

const ActiveLink = createContext();

export const ActiveLinkProvider = ({ children  }) => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <ActiveLink.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </ActiveLink.Provider>
  );
};

export const useActiveLink = () => useContext(ActiveLink);

ActiveLinkProvider.propTypes = {
    children: PropTypes.any
}
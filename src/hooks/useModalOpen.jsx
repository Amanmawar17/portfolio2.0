import { createContext, useState } from 'react';
import PropTypes from "prop-types";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const openModal = (data) => {
    setSelectedData(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedData(null);
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, selectedData }}>
      {children}
    </ModalContext.Provider>
  );
}

ModalProvider.propTypes = {
    children: PropTypes.any
}
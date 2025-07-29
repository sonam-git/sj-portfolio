/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface ContactModalContextType {
  isContactModalOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

// Custom hook for using the contact modal context
export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (context === undefined) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};

interface ContactModalProviderProps {
  children: ReactNode;
}

// Provider component for the contact modal context
export const ContactModalProvider: React.FC<ContactModalProviderProps> = ({ children }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <ContactModalContext.Provider value={{
      isContactModalOpen,
      openContactModal,
      closeContactModal
    }}>
      {children}
    </ContactModalContext.Provider>
  );
};

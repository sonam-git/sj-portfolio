import { useEffect } from 'react'
import Header from './components/Header'
import SideNavBar from './components/SideNavBar'
import MainContent from './components/MainContent'
import ContactModal from './components/ContactModal'
import ErrorBoundary from './components/ErrorBoundary'
import { ThemeProvider } from './contexts/ThemeContext'
import { SidebarProvider } from './contexts/SidebarContext'
import { ContactModalProvider, useContactModal } from './contexts/ContactModalContext'
import { suppressExtensionErrors, clearConsoleAndWelcome } from './utils/consoleUtils'

function AppContent() {
  const { isContactModalOpen, closeContactModal } = useContactModal();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <SideNavBar />
      <MainContent />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
}

function App() {
  useEffect(() => {
    // Clear console and show welcome message
    clearConsoleAndWelcome()
    
    // Suppress extension-related errors
    const cleanup = suppressExtensionErrors()
    
    return cleanup
  }, [])

  return (
    <ThemeProvider>
      <SidebarProvider>
        <ContactModalProvider>
          <ErrorBoundary>
            <AppContent />
          </ErrorBoundary>
        </ContactModalProvider>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App

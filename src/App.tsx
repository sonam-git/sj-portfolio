import { useEffect } from 'react'
import AppRouterContent from './router/AppRouter'
import ErrorBoundary from './components/ErrorBoundary'
import { ThemeProvider } from './contexts/ThemeContext'
import { SidebarProvider } from './contexts/SidebarContext'
import { ContactModalProvider } from './contexts/ContactModalContext'
import { suppressExtensionErrors, clearConsoleAndWelcome } from './utils/consoleUtils'

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
            <AppRouterContent />
          </ErrorBoundary>
        </ContactModalProvider>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App

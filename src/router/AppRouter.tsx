import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import SideNavBarRouter from '../components/SideNavBarRouter';
import ContactModal from '../components/ContactModal';
import { useContactModal } from '../contexts/ContactModalContext';
import { useSidebar } from '../contexts/SidebarContext';

// Import page components
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import CertificationsPage from '../pages/CertificationsPage';
import SkillsPage from '../pages/SkillsPage';
import ExperiencePage from '../pages/ExperiencePage';
import EducationPage from '../pages/EducationPage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';
import ResumePage from '../pages/ResumePage';

function AppRouterContent() {
  const { isContactModalOpen, closeContactModal } = useContactModal();
  const { isExpanded } = useSidebar();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <SideNavBarRouter />
        
        {/* Main content area with routing */}
        <main className={`transition-all duration-300 ${
          isExpanded ? 'lg:ml-64' : 'lg:ml-16'
        }`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/technical-skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
      </div>
    </Router>
  );
}

export default AppRouterContent;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import SideNavBarRouter from '../components/SideNavBarRouter';
import Footer from '../components/Footer';
import { useSidebar } from '../contexts/SidebarContext';

// Import page components
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ExperiencePage from '../pages/ExperiencePage';
import EducationPage from '../pages/EducationPage';
import CertificationsPage from '../pages/CertificationsPage';
import SkillsPage from '../pages/SkillsPage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';
import ResumePage from '../pages/ResumePage';

const AppRouter: React.FC = () => {
  const { isExpanded } = useSidebar();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        
        <div className="flex">
          <SideNavBarRouter />
          
          {/* Main content with dynamic sidebar margin */}
          <main className={`flex-1 transition-all duration-300 ${
            isExpanded ? 'lg:ml-64' : 'lg:ml-16'
          }`}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </main>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;

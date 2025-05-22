import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import '../styles/MainContainer.css';

// PUBLIC_INTERFACE
/**
 * MainContainer component for FlexiDash Core
 * Provides a flexible layout with sidebar, header, main content, and footer
 * Manages responsive states and layout adjustments
 */
function MainContainer({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className={`flexidash-container ${sidebarOpen ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flexidash-main">
        <Header />
        <MainContent>
          {children}
        </MainContent>
        <Footer />
      </div>
    </div>
  );
}

export default MainContainer;

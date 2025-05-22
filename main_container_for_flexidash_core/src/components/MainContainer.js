import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import { useAppContext } from '../contexts/AppContext';
import '../styles/MainContainer.css';

// PUBLIC_INTERFACE
/**
 * MainContainer component for FlexiDash Core
 * Provides a flexible layout with sidebar, header, main content, and footer
 * Manages responsive states and layout adjustments
 */
function MainContainer({ children }) {
  const { sidebarOpen } = useAppContext();
  
  return (
    <div className={`flexidash-container ${sidebarOpen ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
      <Sidebar />
      
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

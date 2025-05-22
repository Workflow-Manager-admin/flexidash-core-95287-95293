import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { useAppContext } from '../contexts/AppContext';
import '../styles/MainContainer.css';

// PUBLIC_INTERFACE
/**
 * MainContainer component for FlexiDash Core
 * Provides a flexible layout with sidebar, header, main content, and footer
 * Manages responsive states and layout adjustments
 */
function MainContainer() {
  const { sidebarOpen, isDarkMode } = useAppContext();
  
  return (
    <div className={`flexidash-container ${sidebarOpen ? 'sidebar-expanded' : 'sidebar-collapsed'} ${isDarkMode ? 'dark-theme' : ''}`}>
      <Sidebar />
      
      <div className="flexidash-main">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default MainContainer;

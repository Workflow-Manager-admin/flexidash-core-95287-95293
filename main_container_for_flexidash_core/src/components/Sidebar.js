import React, { useState } from 'react';
import '../styles/MainContainer.css';

// PUBLIC_INTERFACE
/**
 * Sidebar component for the FlexiDash main container
 * Provides navigation and collapsible functionality
 */
function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`flexidash-sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-symbol">*</span> 
          <span className={`logo-text ${!isOpen ? 'hidden' : ''}`}>FlexiDash</span>
        </div>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isOpen ? '◄' : '►'}
        </button>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li className="sidebar-nav-item active">
            <span className="nav-icon">📊</span>
            <span className={`nav-text ${!isOpen ? 'hidden' : ''}`}>Dashboard</span>
          </li>
          <li className="sidebar-nav-item">
            <span className="nav-icon">📈</span>
            <span className={`nav-text ${!isOpen ? 'hidden' : ''}`}>Analytics</span>
          </li>
          <li className="sidebar-nav-item">
            <span className="nav-icon">⚙️</span>
            <span className={`nav-text ${!isOpen ? 'hidden' : ''}`}>Settings</span>
          </li>
          <li className="sidebar-nav-item">
            <span className="nav-icon">👤</span>
            <span className={`nav-text ${!isOpen ? 'hidden' : ''}`}>Profile</span>
          </li>
          <li className="sidebar-nav-item">
            <span className="nav-icon">❓</span>
            <span className={`nav-text ${!isOpen ? 'hidden' : ''}`}>Help</span>
          </li>
        </ul>
      </nav>
      
      <div className={`sidebar-footer ${!isOpen ? 'hidden' : ''}`}>
        <p>FlexiDash Core v1.0</p>
      </div>
    </div>
  );
}

export default Sidebar;

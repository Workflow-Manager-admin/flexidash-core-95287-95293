import React from 'react';
import '../styles/MainContainer.css';

// PUBLIC_INTERFACE
/**
 * Header component for the FlexiDash main container
 * Contains search, user profile and notification elements
 */
function Header() {
  return (
    <header className="flexidash-header">
      <div className="header-search">
        <input 
          type="text" 
          placeholder="Search..." 
          className="search-input"
        />
        <button className="search-button">🔍</button>
      </div>

      <div className="header-actions">
        <div className="notification-icon">
          🔔
          <span className="notification-badge">3</span>
        </div>
        
        <div className="user-profile">
          <div className="user-avatar">
            <span>KB</span>
          </div>
          <div className="user-info">
            <span className="user-name">Kavia User</span>
            <span className="user-role">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

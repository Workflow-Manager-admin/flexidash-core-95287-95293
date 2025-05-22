import React from 'react';
import '../styles/MainContainer.css';

// PUBLIC_INTERFACE
/**
 * MainContent component for the FlexiDash container
 * Primary content area that hosts dashboard widgets and content with enhanced styling
 */
function MainContent({ children }) {
  return (
    <main className="flexidash-main-content">
      <div className="page-title">
        <h1>Dashboard</h1>
        <div className="breadcrumb">
          <span>Home</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Dashboard</span>
        </div>
      </div>
      
      <div className="content-wrapper">
        {children || (
          <div className="placeholder-content">
            <div className="dashboard-grid">
              {/* Overview widget */}
              <div className="dashboard-widget wide">
                <div className="widget-header">
                  <h3>Overview</h3>
                  <div className="widget-controls">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
                      <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" fill="currentColor"/>
                      <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <div className="widget-content">
                  <p>Welcome to FlexiDash Core. This is a placeholder for your dashboard content.</p>
                </div>
              </div>
              
              {/* Statistics widget */}
              <div className="dashboard-widget">
                <div className="widget-header">
                  <h3>Statistics</h3>
                  <div className="widget-controls">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
                      <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" fill="currentColor"/>
                      <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <div className="widget-content">
                  <div className="stats-item">
                    <div className="stats-label">Users</div>
                    <div className="stats-value">1,234</div>
                  </div>
                  <div className="stats-item">
                    <div className="stats-label">Revenue</div>
                    <div className="stats-value">$5,678</div>
                  </div>
                  <div className="stats-item">
                    <div className="stats-label">Growth</div>
                    <div className="stats-value">+12.5%</div>
                  </div>
                </div>
              </div>
              
              {/* Activity widget */}
              <div className="dashboard-widget">
                <div className="widget-header">
                  <h3>Activity</h3>
                  <div className="widget-controls">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
                      <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" fill="currentColor"/>
                      <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <div className="widget-content">
                  <p>Recent activity will appear here.</p>
                </div>
              </div>
              
              {/* Tasks widget */}
              <div className="dashboard-widget">
                <div className="widget-header">
                  <h3>Tasks</h3>
                  <div className="widget-controls">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
                      <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" fill="currentColor"/>
                      <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <div className="widget-content">
                  <p>Your tasks will appear here.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default MainContent;

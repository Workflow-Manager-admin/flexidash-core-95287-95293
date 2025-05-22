import React from 'react';
import '../styles/MainContainer.css';

// PUBLIC_INTERFACE
/**
 * MainContent component for the FlexiDash container
 * Primary content area that hosts dashboard widgets and content
 */
function MainContent({ children }) {
  return (
    <main className="flexidash-main-content">
      <div className="page-title">
        <h1>Dashboard</h1>
        <div className="breadcrumb">
          <span>Home</span> / <span>Dashboard</span>
        </div>
      </div>
      
      <div className="content-wrapper">
        {children || (
          <div className="placeholder-content">
            <div className="dashboard-grid">
              {/* Placeholder dashboard widgets */}
              <div className="dashboard-widget wide">
                <div className="widget-header">
                  <h3>Overview</h3>
                  <div className="widget-controls">⋮</div>
                </div>
                <div className="widget-content">
                  <p>Welcome to FlexiDash Core. This is a placeholder for your dashboard content.</p>
                </div>
              </div>
              
              <div className="dashboard-widget">
                <div className="widget-header">
                  <h3>Statistics</h3>
                  <div className="widget-controls">⋮</div>
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
                </div>
              </div>
              
              <div className="dashboard-widget">
                <div className="widget-header">
                  <h3>Activity</h3>
                  <div className="widget-controls">⋮</div>
                </div>
                <div className="widget-content">
                  <p>Recent activity will appear here.</p>
                </div>
              </div>
              
              <div className="dashboard-widget">
                <div className="widget-header">
                  <h3>Tasks</h3>
                  <div className="widget-controls">⋮</div>
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

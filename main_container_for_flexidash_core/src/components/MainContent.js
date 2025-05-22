import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import Widget from './Widget';
import '../styles/MainContainer.css';

// PUBLIC_INTERFACE
/**
 * MainContent component for the FlexiDash container
 * Primary content area that hosts dashboard widgets and content with enhanced styling
 */
function MainContent({ children }) {
  const { widgets, searchQuery, filteredContent, resetWidgetLayout } = useAppContext();
  
  // Get widgets to display based on search results or all widgets
  const displayWidgets = filteredContent || widgets.filter(widget => widget.visible);

  return (
    <main className="flexidash-main-content">
      <div className="page-title">
        <div className="title-section">
          <h1>Dashboard</h1>
          <div className="breadcrumb">
            <span>Home</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Dashboard</span>
          </div>
        </div>
        
        <div className="dashboard-actions">
          {searchQuery && filteredContent && (
            <div className="search-results-info">
              Showing {filteredContent.length} result{filteredContent.length !== 1 ? 's' : ''} for "{searchQuery}"
            </div>
          )}
          <button className="btn btn-secondary" onClick={resetWidgetLayout}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 4v6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 20v-6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Reset Layout
          </button>
        </div>
      </div>
      
      <div className="content-wrapper">
        {children || (
          <div className="placeholder-content">
            <div className="dashboard-grid">
              {displayWidgets.length > 0 ? (
                displayWidgets.map((widget) => (
                  <Widget
                    key={widget.id}
                    id={widget.id}
                    title={widget.title}
                    type={widget.type}
                  >
                    {widget.content}
                  </Widget>
                ))
              ) : searchQuery ? (
                <div className="no-results">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3>No results found</h3>
                  <p>No widgets match your search criteria.</p>
                </div>
              ) : (
                <div className="no-widgets">
                  <p>All widgets have been closed. Click "Reset Layout" to restore.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default MainContent;

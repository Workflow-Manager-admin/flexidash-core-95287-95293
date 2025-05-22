import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import Widget from '../components/Widget';

// PUBLIC_INTERFACE
/**
 * Dashboard page component
 * Displays overview metrics, charts and key performance indicators
 */
function Dashboard() {
  const { widgets } = useAppContext();
  
  return (
    <div className="dashboard-page">
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
      </div>

      <div className="dashboard-content">
        {/* Summary Cards Row */}
        <div className="summary-cards">
          <div className="summary-card">
            <div className="summary-card-icon success">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 11H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="summary-card-content">
              <h4>Total Users</h4>
              <div className="summary-card-value">5,248</div>
              <div className="summary-card-change positive">+12.5% <span>from last month</span></div>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-card-icon primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="summary-card-content">
              <h4>Revenue</h4>
              <div className="summary-card-value">$42,580</div>
              <div className="summary-card-change positive">+8.2% <span>from last month</span></div>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-card-icon warning">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="summary-card-content">
              <h4>Active Sessions</h4>
              <div className="summary-card-value">1,362</div>
              <div className="summary-card-change negative">-3.1% <span>from last week</span></div>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-card-icon info">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="summary-card-content">
              <h4>Global Reach</h4>
              <div className="summary-card-value">28 Countries</div>
              <div className="summary-card-change positive">+2 <span>from last quarter</span></div>
            </div>
          </div>
        </div>

        {/* Main Content Rows */}
        <div className="dashboard-grid-layout">
          {/* Revenue Chart Widget */}
          <Widget
            id="revenue-chart"
            title="Revenue Overview"
            type="wide"
          >
            <div className="chart-container">
              <div className="chart-header">
                <div className="chart-title-area">
                  <h4>Monthly Revenue</h4>
                  <span className="chart-subtitle">Jan - Dec 2023</span>
                </div>
                <div className="chart-legend">
                  <div className="legend-item">
                    <div className="legend-color" style={{backgroundColor: 'var(--primary-300)'}}></div>
                    <span>Current Year</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color" style={{backgroundColor: 'var(--neutral-400)'}}></div>
                    <span>Previous Year</span>
                  </div>
                </div>
              </div>
              <div className="chart-placeholder">
                <div className="chart-mock">
                  <div className="chart-bar" style={{height: '65%'}}></div>
                  <div className="chart-bar" style={{height: '80%'}}></div>
                  <div className="chart-bar" style={{height: '60%'}}></div>
                  <div className="chart-bar" style={{height: '90%'}}></div>
                  <div className="chart-bar" style={{height: '75%'}}></div>
                  <div className="chart-bar" style={{height: '95%'}}></div>
                  <div className="chart-bar" style={{height: '70%'}}></div>
                  <div className="chart-bar" style={{height: '85%'}}></div>
                  <div className="chart-bar" style={{height: '80%'}}></div>
                  <div className="chart-bar" style={{height: '75%'}}></div>
                  <div className="chart-bar" style={{height: '88%'}}></div>
                  <div className="chart-bar" style={{height: '92%'}}></div>
                </div>
                <div className="chart-labels">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
              </div>
            </div>
          </Widget>

          {/* Performance Widget */}
          <Widget
            id="performance-metrics"
            title="Performance Metrics"
          >
            <div className="metrics-container">
              <div className="metric-item">
                <div className="metric-info">
                  <span className="metric-label">Conversion Rate</span>
                  <span className="metric-value">3.45%</span>
                </div>
                <div className="metric-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '68%'}}></div>
                  </div>
                  <span className="progress-text">68%</span>
                </div>
              </div>
              <div className="metric-item">
                <div className="metric-info">
                  <span className="metric-label">Avg. Order Value</span>
                  <span className="metric-value">$82.56</span>
                </div>
                <div className="metric-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '75%'}}></div>
                  </div>
                  <span className="progress-text">75%</span>
                </div>
              </div>
              <div className="metric-item">
                <div className="metric-info">
                  <span className="metric-label">Cart Abandonment</span>
                  <span className="metric-value">24.3%</span>
                </div>
                <div className="metric-progress">
                  <div className="progress-bar">
                    <div className="progress-fill warning" style={{width: '24%'}}></div>
                  </div>
                  <span className="progress-text">24%</span>
                </div>
              </div>
              <div className="metric-item">
                <div className="metric-info">
                  <span className="metric-label">Return Rate</span>
                  <span className="metric-value">5.7%</span>
                </div>
                <div className="metric-progress">
                  <div className="progress-bar">
                    <div className="progress-fill success" style={{width: '94%'}}></div>
                  </div>
                  <span className="progress-text">94%</span>
                </div>
              </div>
            </div>
          </Widget>

          {/* Activity Feed Widget */}
          <Widget
            id="recent-activity"
            title="Recent Activity"
          >
            <div className="activity-feed">
              <div className="activity-item">
                <div className="activity-icon green">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49706C5.79935 3.85779 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="activity-content">
                  <p className="activity-text"><strong>Emma Watson</strong> completed profile verification</p>
                  <span className="activity-time">2 min ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon blue">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="activity-content">
                  <p className="activity-text"><strong>New message</strong> received from support team</p>
                  <span className="activity-time">10 min ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon orange">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="activity-content">
                  <p className="activity-text"><strong>Server maintenance</strong> scheduled for 2:00 AM</p>
                  <span className="activity-time">25 min ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon purple">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="activity-content">
                  <p className="activity-text"><strong>Monthly report</strong> is ready for download</p>
                  <span className="activity-time">1 hour ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon red">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 15H11V11H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 9H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="activity-content">
                  <p className="activity-text"><strong>Alert:</strong> Unusual login attempt detected</p>
                  <span className="activity-time">2 hours ago</span>
                </div>
              </div>
            </div>
            <div className="activity-footer">
              <button className="btn-link">View All Activity</button>
            </div>
          </Widget>

          {/* Quick Stats Widget */}
          <Widget
            id="quick-stats"
            title="Quick Stats"
          >
            {[
              { label: 'Page Views', value: '428,254' },
              { label: 'Sessions', value: '143,382' },
              { label: 'Bounce Rate', value: '32.4%' },
              { label: 'New Customers', value: '528' },
              { label: 'Support Tickets', value: '89' }
            ]}
          </Widget>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

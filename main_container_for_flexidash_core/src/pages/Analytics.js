import React from 'react';
import Widget from '../components/Widget';

// PUBLIC_INTERFACE
/**
 * Analytics page component
 * Displays detailed analytics, charts and data visualizations
 */
function Analytics() {
  return (
    <div className="analytics-page">
      <div className="page-title">
        <div className="title-section">
          <h1>Analytics</h1>
          <div className="breadcrumb">
            <span>Home</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Analytics</span>
          </div>
        </div>

        <div className="analytics-controls">
          <div className="date-filter">
            <button className="btn btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Last 30 Days
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <button className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Create Report
          </button>
        </div>
      </div>

      <div className="analytics-content">
        {/* KPI Cards */}
        <div className="kpi-cards">
          <div className="kpi-card">
            <div className="kpi-header">
              <h3>Users</h3>
              <div className="kpi-trend positive">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>16.8%</span>
              </div>
            </div>
            <div className="kpi-value">124,892</div>
            <div className="kpi-chart">
              <div className="mini-chart">
                <div className="mini-chart-bar" style={{height: '30%'}}></div>
                <div className="mini-chart-bar" style={{height: '45%'}}></div>
                <div className="mini-chart-bar" style={{height: '65%'}}></div>
                <div className="mini-chart-bar" style={{height: '55%'}}></div>
                <div className="mini-chart-bar" style={{height: '75%'}}></div>
                <div className="mini-chart-bar" style={{height: '90%'}}></div>
                <div className="mini-chart-bar" style={{height: '80%'}}></div>
              </div>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-header">
              <h3>Sessions</h3>
              <div className="kpi-trend positive">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>8.2%</span>
              </div>
            </div>
            <div className="kpi-value">287,451</div>
            <div className="kpi-chart">
              <div className="mini-chart">
                <div className="mini-chart-bar" style={{height: '50%'}}></div>
                <div className="mini-chart-bar" style={{height: '65%'}}></div>
                <div className="mini-chart-bar" style={{height: '55%'}}></div>
                <div className="mini-chart-bar" style={{height: '70%'}}></div>
                <div className="mini-chart-bar" style={{height: '60%'}}></div>
                <div className="mini-chart-bar" style={{height: '80%'}}></div>
                <div className="mini-chart-bar" style={{height: '85%'}}></div>
              </div>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-header">
              <h3>Bounce Rate</h3>
              <div className="kpi-trend negative">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>3.2%</span>
              </div>
            </div>
            <div className="kpi-value">32.4%</div>
            <div className="kpi-chart">
              <div className="mini-chart negative">
                <div className="mini-chart-bar" style={{height: '40%'}}></div>
                <div className="mini-chart-bar" style={{height: '35%'}}></div>
                <div className="mini-chart-bar" style={{height: '38%'}}></div>
                <div className="mini-chart-bar" style={{height: '32%'}}></div>
                <div className="mini-chart-bar" style={{height: '34%'}}></div>
                <div className="mini-chart-bar" style={{height: '30%'}}></div>
                <div className="mini-chart-bar" style={{height: '32%'}}></div>
              </div>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-header">
              <h3>Avg. Visit Time</h3>
              <div className="kpi-trend positive">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>12.5%</span>
              </div>
            </div>
            <div className="kpi-value">4m 32s</div>
            <div className="kpi-chart">
              <div className="mini-chart">
                <div className="mini-chart-bar" style={{height: '45%'}}></div>
                <div className="mini-chart-bar" style={{height: '52%'}}></div>
                <div className="mini-chart-bar" style={{height: '60%'}}></div>
                <div className="mini-chart-bar" style={{height: '65%'}}></div>
                <div className="mini-chart-bar" style={{height: '70%'}}></div>
                <div className="mini-chart-bar" style={{height: '75%'}}></div>
                <div className="mini-chart-bar" style={{height: '78%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="analytics-charts-row">
          <Widget
            id="user-activity-chart"
            title="User Activity"
            type="wide"
          >
            <div className="chart-container">
              <div className="chart-header">
                <div className="chart-title-area">
                  <h4>Daily Active Users</h4>
                  <span className="chart-subtitle">Jan - Jun 2023</span>
                </div>
                <div className="chart-controls">
                  <div className="chart-segmented-control">
                    <button className="control-button active">Daily</button>
                    <button className="control-button">Weekly</button>
                    <button className="control-button">Monthly</button>
                  </div>
                </div>
              </div>
              <div className="analytics-main-chart">
                <div className="chart-area">
                  <div className="chart-line"></div>
                  <div className="chart-line"></div>
                  <div className="chart-line"></div>
                  <div className="chart-line"></div>
                  <div className="chart-line"></div>
                  <div className="chart-gradient"></div>
                </div>
                <div className="chart-time-axis">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </div>
            </div>
          </Widget>
        </div>

        {/* Demographics and Traffic Sources */}
        <div className="analytics-split-row">
          <Widget
            id="user-demographics"
            title="User Demographics"
          >
            <div className="demographics-content">
              <div className="demographics-chart">
                <div className="donut-chart">
                  <div className="donut-segment" style={{
                    '--percent': '45%',
                    '--color': 'var(--primary-300)',
                    '--start': '0deg'
                  }}></div>
                  <div className="donut-segment" style={{
                    '--percent': '30%',
                    '--color': 'var(--accent-blue)',
                    '--start': '162deg'
                  }}></div>
                  <div className="donut-segment" style={{
                    '--percent': '15%',
                    '--color': 'var(--accent-green)',
                    '--start': '270deg'
                  }}></div>
                  <div className="donut-segment" style={{
                    '--percent': '10%',
                    '--color': 'var(--neutral-400)',
                    '--start': '324deg'
                  }}></div>
                  <div className="donut-hole">
                    <div className="donut-value">18-34</div>
                    <div className="donut-label">Age group</div>
                  </div>
                </div>
              </div>
              <div className="demographics-legend">
                <div className="legend-item">
                  <div className="legend-color" style={{backgroundColor: 'var(--primary-300)'}}></div>
                  <div className="legend-info">
                    <span className="legend-label">18-34</span>
                    <span className="legend-value">45%</span>
                  </div>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{backgroundColor: 'var(--accent-blue)'}}></div>
                  <div className="legend-info">
                    <span className="legend-label">35-44</span>
                    <span className="legend-value">30%</span>
                  </div>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{backgroundColor: 'var(--accent-green)'}}></div>
                  <div className="legend-info">
                    <span className="legend-label">45-54</span>
                    <span className="legend-value">15%</span>
                  </div>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{backgroundColor: 'var(--neutral-400)'}}></div>
                  <div className="legend-info">
                    <span className="legend-label">55+</span>
                    <span className="legend-value">10%</span>
                  </div>
                </div>
              </div>
            </div>
          </Widget>

          <Widget
            id="traffic-sources"
            title="Traffic Sources"
          >
            <div className="traffic-sources-content">
              <div className="traffic-sources-table">
                <div className="traffic-row header">
                  <div className="traffic-source">Source</div>
                  <div className="traffic-users">Users</div>
                  <div className="traffic-percent">%</div>
                </div>
                <div className="traffic-row">
                  <div className="traffic-source">Organic Search</div>
                  <div className="traffic-users">52,634</div>
                  <div className="traffic-percent">
                    <div className="traffic-bar-container">
                      <div className="traffic-bar" style={{width: '42%'}}></div>
                      <span>42%</span>
                    </div>
                  </div>
                </div>
                <div className="traffic-row">
                  <div className="traffic-source">Direct</div>
                  <div className="traffic-users">31,678</div>
                  <div className="traffic-percent">
                    <div className="traffic-bar-container">
                      <div className="traffic-bar" style={{width: '25%'}}></div>
                      <span>25%</span>
                    </div>
                  </div>
                </div>
                <div className="traffic-row">
                  <div className="traffic-source">Social Media</div>
                  <div className="traffic-users">25,147</div>
                  <div className="traffic-percent">
                    <div className="traffic-bar-container">
                      <div className="traffic-bar" style={{width: '20%'}}></div>
                      <span>20%</span>
                    </div>
                  </div>
                </div>
                <div className="traffic-row">
                  <div className="traffic-source">Referral</div>
                  <div className="traffic-users">10,258</div>
                  <div className="traffic-percent">
                    <div className="traffic-bar-container">
                      <div className="traffic-bar" style={{width: '8%'}}></div>
                      <span>8%</span>
                    </div>
                  </div>
                </div>
                <div className="traffic-row">
                  <div className="traffic-source">Email</div>
                  <div className="traffic-users">6,452</div>
                  <div className="traffic-percent">
                    <div className="traffic-bar-container">
                      <div className="traffic-bar" style={{width: '5%'}}></div>
                      <span>5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Widget>
        </div>

        {/* Top Pages Section */}
        <Widget
          id="top-pages"
          title="Top Pages"
          type="wide"
        >
          <div className="top-pages-table">
            <table className="analytics-table">
              <thead>
                <tr>
                  <th>Page</th>
                  <th>Views</th>
                  <th>Unique Views</th>
                  <th>Avg. Time</th>
                  <th>Bounce Rate</th>
                  <th>Exit Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="page-url">/homepage</td>
                  <td>125,483</td>
                  <td>98,342</td>
                  <td>2m 34s</td>
                  <td>25.7%</td>
                  <td>18.2%</td>
                </tr>
                <tr>
                  <td className="page-url">/products</td>
                  <td>98,246</td>
                  <td>76,129</td>
                  <td>3m 12s</td>
                  <td>18.3%</td>
                  <td>12.1%</td>
                </tr>
                <tr>
                  <td className="page-url">/blog/top-10-tips</td>
                  <td>76,892</td>
                  <td>64,537</td>
                  <td>4m 48s</td>
                  <td>12.4%</td>
                  <td>8.7%</td>
                </tr>
                <tr>
                  <td className="page-url">/pricing</td>
                  <td>68,324</td>
                  <td>52,819</td>
                  <td>2m 52s</td>
                  <td>22.6%</td>
                  <td>35.4%</td>
                </tr>
                <tr>
                  <td className="page-url">/about-us</td>
                  <td>42,563</td>
                  <td>38,764</td>
                  <td>1m 58s</td>
                  <td>28.9%</td>
                  <td>22.5%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-footer">
            <div className="table-pagination">
              <button className="pagination-button disabled">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <span className="pagination-page active">1</span>
              <span className="pagination-page">2</span>
              <span className="pagination-page">3</span>
              <span className="pagination-dots">...</span>
              <span className="pagination-page">10</span>
              <button className="pagination-button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="table-info">
              Showing 1-5 of 42 pages
            </div>
          </div>
        </Widget>
      </div>
    </div>
  );
}

export default Analytics;

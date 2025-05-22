import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { useAppContext } from '../contexts/AppContext';
import '../styles/MainContainer.css';

// PUBLIC_INTERFACE
/**
 * Interactive Widget component for FlexiDash dashboard
 * Supports dragging, minimizing, and closing functionalities
 * 
 * @param {Object} props - Component props
 * @param {string} props.id - Unique widget identifier
 * @param {string} props.title - Widget title
 * @param {string} props.type - Widget type (wide, normal)
 * @param {React.ReactNode} props.children - Widget content
 * @param {boolean} props.draggable - Whether widget is draggable
 */
function Widget({ id, title, type = 'normal', children, draggable = true }) {
  const { toggleWidgetMinimize, closeWidget, updateWidgetPosition, widgets } = useAppContext();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const widgetData = widgets.find(w => w.id === id) || { minimized: false, visible: true };
  const { minimized, visible } = widgetData;
  
  // Handle position change on drag
  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };
  
  // Update context when drag stops
  const handleDragStop = (e, data) => {
    updateWidgetPosition(id, { x: data.x, y: data.y });
  };
  
  // Reset position if widget is no longer visible to prepare for future reappearance
  useEffect(() => {
    if (!visible) {
      setPosition({ x: 0, y: 0 });
    }
  }, [visible]);
  
  if (!visible) return null;
  
  // The content for the widget
  const renderContent = () => {
    // For array content (like statistics widget)
    if (Array.isArray(children)) {
      return (
        <div className="widget-content">
          {children.map((item, index) => (
            <div className="stats-item" key={index}>
              <div className="stats-label">{item.label}</div>
              <div className="stats-value">{item.value}</div>
            </div>
          ))}
        </div>
      );
    }
    
    // For simple text content
    if (typeof children === 'string') {
      return <div className="widget-content"><p>{children}</p></div>;
    }
    
    // For React node content
    return <div className="widget-content">{children}</div>;
  };
  
  const widgetContent = (
    <div className={`dashboard-widget ${type} ${minimized ? 'minimized' : ''}`}>
      <div className="widget-header">
        <h3>{title}</h3>
        <div className="widget-controls">
          <button 
            className="widget-control minimize"
            onClick={() => toggleWidgetMinimize(id)}
            aria-label={minimized ? "Expand" : "Minimize"}
          >
            {minimized ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
          <button 
            className="widget-control close"
            onClick={() => closeWidget(id)}
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      {!minimized && renderContent()}
    </div>
  );
  
  if (draggable) {
    return (
      <Draggable
        handle=".widget-header"
        position={position}
        onDrag={handleDrag}
        onStop={handleDragStop}
        bounds="parent"
      >
        {widgetContent}
      </Draggable>
    );
  }
  
  return widgetContent;
}

export default Widget;

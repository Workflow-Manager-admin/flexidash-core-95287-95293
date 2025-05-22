import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';

// Create context
export const AppContext = createContext();

// Mock data for notifications
const mockNotifications = [
  {
    id: 1,
    title: 'New update available',
    message: 'FlexiDash Core v1.1 is available for installation.',
    time: '10 min ago',
    read: false,
    type: 'info'
  },
  {
    id: 2,
    title: 'Server maintenance',
    message: 'Scheduled maintenance on May 15th, 2023.',
    time: '1 hour ago',
    read: false,
    type: 'warning'
  },
  {
    id: 3,
    title: 'Welcome to FlexiDash',
    message: 'Thank you for using FlexiDash Core.',
    time: '1 day ago',
    read: true,
    type: 'success'
  },
  {
    id: 4,
    title: 'Profile updated',
    message: 'Your profile information has been updated successfully.',
    time: '2 days ago',
    read: true,
    type: 'success'
  },
  {
    id: 5,
    title: 'Storage limit',
    message: 'You are approaching your storage limit (85% used).',
    time: '3 days ago',
    read: true,
    type: 'warning'
  }
];

// Mock data for dashboard widgets
const defaultWidgets = [
  {
    id: 'widget-overview',
    title: 'Overview',
    type: 'wide',
    minimized: false,
    visible: true,
    position: { x: 0, y: 0 },
    content: 'Welcome to FlexiDash Core. This is a placeholder for your dashboard content.'
  },
  {
    id: 'widget-statistics',
    title: 'Statistics',
    type: 'normal',
    minimized: false,
    visible: true,
    position: { x: 0, y: 0 },
    content: [
      { label: 'Users', value: '1,234' },
      { label: 'Revenue', value: '$5,678' },
      { label: 'Growth', value: '+12.5%' }
    ]
  },
  {
    id: 'widget-activity',
    title: 'Activity',
    type: 'normal',
    minimized: false,
    visible: true,
    position: { x: 0, y: 0 },
    content: 'Recent activity will appear here.'
  },
  {
    id: 'widget-tasks',
    title: 'Tasks',
    type: 'normal',
    minimized: false,
    visible: true,
    position: { x: 0, y: 0 },
    content: 'Your tasks will appear here.'
  }
];

// PUBLIC_INTERFACE
/**
 * App Context Provider for FlexiDash Core
 * Provides global state management for theme, notifications, widgets and search functionality
 */
export const AppProvider = ({ children }) => {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Sidebar state (moved from MainContainer for global access)
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Notifications state
  const [notifications, setNotifications] = useState(mockNotifications);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  
  // Widgets state
  const [widgets, setWidgets] = useState(defaultWidgets);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContent, setFilteredContent] = useState(null);
  
  // Calculate unread notifications count
  useEffect(() => {
    const unreadNotifications = notifications.filter(notification => !notification.read);
    setUnreadCount(unreadNotifications.length);
  }, [notifications]);
  
  // Apply theme to document
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);
  
  // Toggle sidebar visibility
  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);
  
  // Toggle theme
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);
  
  // Toggle notification dropdown
  const toggleNotificationDropdown = useCallback(() => {
    setShowNotificationDropdown(prev => !prev);
  }, []);
  
  // Mark notification as read
  const markNotificationAsRead = useCallback((id) => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  }, []);
  
  // Mark all notifications as read
  const markAllNotificationsAsRead = useCallback(() => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
  }, []);
  
  // Toggle widget minimize state
  const toggleWidgetMinimize = useCallback((id) => {
    setWidgets(prevWidgets => 
      prevWidgets.map(widget => 
        widget.id === id ? { ...widget, minimized: !widget.minimized } : widget
      )
    );
  }, []);
  
  // Close widget
  const closeWidget = useCallback((id) => {
    setWidgets(prevWidgets => 
      prevWidgets.map(widget => 
        widget.id === id ? { ...widget, visible: false } : widget
      )
    );
  }, []);
  
  // Update widget position
  const updateWidgetPosition = useCallback((id, position) => {
    setWidgets(prevWidgets => 
      prevWidgets.map(widget => 
        widget.id === id ? { ...widget, position } : widget
      )
    );
  }, []);
  
  // Reset widget visibility and positions
  const resetWidgetLayout = useCallback(() => {
    setWidgets(defaultWidgets);
  }, []);
  
  // Perform search filtering
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setFilteredContent(null);
      return;
    }
    
    // Filter widgets based on search query
    const results = widgets.filter(widget => {
      const title = widget.title.toLowerCase();
      const queryLower = query.toLowerCase();
      
      // Check if title contains the query
      if (title.includes(queryLower)) {
        return true;
      }
      
      // Check if content contains the query (handle different content types)
      if (typeof widget.content === 'string') {
        return widget.content.toLowerCase().includes(queryLower);
      }
      
      // Handle array content (statistics widget)
      if (Array.isArray(widget.content)) {
        return widget.content.some(item => 
          item.label.toLowerCase().includes(queryLower) || 
          item.value.toLowerCase().includes(queryLower)
        );
      }
      
      return false;
    });
    
    setFilteredContent(results);
  }, [widgets]);
  
  // Context value
  const contextValue = {
    // Theme
    isDarkMode,
    toggleTheme,
    
    // Sidebar
    sidebarOpen,
    setSidebarOpen,
    toggleSidebar,
    
    // Notifications
    notifications,
    showNotificationDropdown,
    toggleNotificationDropdown,
    unreadCount,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    
    // Widgets
    widgets,
    toggleWidgetMinimize,
    closeWidget,
    updateWidgetPosition,
    resetWidgetLayout,
    
    // Search
    searchQuery,
    setSearchQuery,
    filteredContent,
    handleSearch
  };
  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// PUBLIC_INTERFACE
/**
 * Custom hook to use the AppContext
 * @returns {Object} The context value from AppContext
 */
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

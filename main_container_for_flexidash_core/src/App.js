import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import { AppProvider } from './contexts/AppContext';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Help from './pages/Help';
import './App.css';

// Create routes configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppProvider>
        <MainContainer />
      </AppProvider>
    ),
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/analytics',
        element: <Analytics />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/help',
        element: <Help />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import React from 'react';
import MainContainer from './components/MainContainer';
import { AppProvider } from './contexts/AppContext';
import './App.css';

function App() {
  return (
    <div className="app">
      <AppProvider>
        <MainContainer />
      </AppProvider>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import DeviceSelection from './pages/DeviceSelection';

function App() {
  return (
    <Router>
      <div>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/register" element={<RegisterPage />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/device-selection" element={<DeviceSelection />} /> 
        </Routes>
        </div>
    </Router>
  );
}

export default App;

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
        <Routes> {/* Use Routes em vez de Switch */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} /> {/* Use element em vez de component */}
          <Route path="/register" element={<RegisterPage />} /> {/* Use element */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Use element */}
          <Route path="/device-selection" element={<DeviceSelection />} /> {/* Use element */}
        </Routes>
        </div>
    </Router>
  );
}

export default App;

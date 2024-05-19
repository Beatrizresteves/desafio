import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import DeviceSelection from './pages/DeviceSelection';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes em vez de Switch */}
        <Route path="/login" element={<LoginPage />} /> {/* Use element em vez de component */}
        <Route path="/register" element={<RegisterPage />} /> {/* Use element */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Use element */}
        <Route path="/device-selection" element={<DeviceSelection />} /> {/* Use element */}
      </Routes>
    </Router>
  );
}

export default App;

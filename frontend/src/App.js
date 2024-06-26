import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './PrivateRoute';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import DeviceSelection from './pages/DeviceSelection';

const useAuth = () => {

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    setIsAuthenticated(true);
  }, []);

  return isAuthenticated;
};

function App() {
  const isAuthenticated = useAuth();

  return (
    <Router>
      <div>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/register" element={<RegisterPage />} /> 
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/device-selection" element={<DeviceSelection />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

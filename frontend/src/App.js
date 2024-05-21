import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './PrivateRoute';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import DeviceSelection from './pages/DeviceSelection';

// Simulação de uma lógica de autenticação (substitua com sua lógica real)
const useAuth = () => {
  // Aqui você deve implementar a lógica real de autenticação
  // Pode ser um estado global, contexto, hook ou qualquer outra lógica
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  // Apenas para demonstração, configure isAuthenticated para true
  // Após login bem-sucedido
  React.useEffect(() => {
    // Simular um login bem-sucedido
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

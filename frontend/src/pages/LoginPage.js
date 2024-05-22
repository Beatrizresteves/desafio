import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Adicionando estado para mensagem de sucesso
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', { username, password });
      console.log(res.data.token);
      setSuccessMessage('Login successful'); 
      setError(''); 
      navigate('/dashboard'); 
    } catch (err) {
      setError('Invalid credentials');
      console.error('Error logging in', err);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10vh',  height: '100vh' }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <form onSubmit={handleSubmit} style={{ width: '300px' }}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" style={{ marginBottom: '10px', width: '100%' }} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ marginBottom: '10px', width: '100%' }} />
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green', marginBottom: '10px' }}>{successMessage}</p>}
        <div><button type="submit" style={{ width: '100%' }}>Login</button></div>
      </form>
      <p>Não tem uma conta? <Link to="/register">Cadastre-se</Link></p>
    </div>
  );
};

export default LoginPage;

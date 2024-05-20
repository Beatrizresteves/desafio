// LoginPage.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate para navegação

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/auth/login', { username, password });
      console.log(res.data.token); // Exibe o token de autenticação
      // Redirecionar para o Dashboard ou outra página privada
    } catch (err) {
      setError('Invalid credentials'); // Exibe mensagem de erro genérica para fins de segurança
      console.error('Error logging in', err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>Nao tem uma conta? <Link to="/register">Cadastre-se</Link></p>
    </div>
  );
};

export default LoginPage;

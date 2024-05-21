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
      setSuccessMessage('Login successful'); // Define a mensagem de sucesso
      setError(''); // Limpa a mensagem de erro, se houver
      navigate('/dashboard'); // Redireciona para a página do Dashboard
    } catch (err) {
      setError('Invalid credentials');
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
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Exibe mensagem de sucesso */}
        <button type="submit">Login</button>
      </form>
      <p>Não tem uma conta? <Link to="/register">Cadastre-se</Link></p>
    </div>
  );
};

export default LoginPage;

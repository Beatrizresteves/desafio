import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3000/api/auth/register', { username, password });
      console.log(res.data.message); // Exibe mensagem de sucesso
      navigate('/dashboard'); // Ajuste o caminho conforme necessário
    } catch (err) {
      setError('Error registering user'); // Exibe mensagem de erro genérica para fins de segurança
      console.error('Error registering user', err);
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
      <p>Já tem uma conta? <Link to="/login">Faça o login!</Link></p>
    </div>
  );
};

export default RegisterPage;

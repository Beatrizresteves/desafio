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
      console.log(res.data.message);
      navigate('/dashboard'); 
    } catch (err) {
      setError('Error registering user'); 
      console.error('Error registering user', err);
    }
  };

  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      height: '100vh', 
      marginTop: '10vh'
    }}>
      <h2 style={{ textAlign: 'center' }}>Cadastro</h2>
      <form onSubmit={handleSubmit} style={{ width: '300px', textAlign: 'center' }}>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Username" 
        style={{ marginBottom: '10px', width: '100%' }}
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          style={{ marginBottom: '10px', width: '100%' }} 
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div><button type="submit" style={{ width: '100%' }}>Register</button></div>
      </form>
      <p>Já tem uma conta? <Link to="/login">Faça o login!</Link></p>
    </div>
  );
};

export default RegisterPage;

const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  console.log('Registrando usuário:', username);

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Tentando login com usuário:', username);

  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log('Usuário não encontrado:', username);
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Senha corresponde:', isMatch);

    if (!isMatch) {
      console.log('Senha inválida para o usuário:', username);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
    console.log('Token gerado:', token);
    res.json({ token });
  } catch (error) {
    console.error('Erro ao processar login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

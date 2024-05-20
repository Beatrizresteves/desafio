// src/pages/HomePage.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function HomePage() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Seja bem vindo!
      </Typography>
      <Typography variant="body1">
        Esta é a página inicial do aplicativo IoT Dashboard.
      </Typography>
    </Container>
  );
}

export default HomePage;

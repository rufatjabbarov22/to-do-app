import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/dashboard');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <AppBar position='static' color='default' elevation={0}>
        <Toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            Microsoft To Do
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Microsoft To Do
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px', marginBottom: '40px' }}>
          <img src="/img1.png" alt='illustration' style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>

        <Button variant='contained' color='primary' size='large' onClick={handleSignIn}>
          Sign in
        </Button>

        <Typography variant='body2' style={{ marginTop: '20px', color: 'gray' }}>
          Sign in with a work, school, or Microsoft account.
        </Typography>
      </Container>

      <Box component='footer' sx={{ py: 3, backgroundColor: '#f7f7f7', textAlign: 'center' }}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' alt='Microsoft' style={{ width: '100px', height: 'auto' }} />
      </Box>
    </div>
  );
}

export default Home;

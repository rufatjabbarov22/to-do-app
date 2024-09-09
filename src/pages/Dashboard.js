import React from 'react';
import { Box, Button, Typography, Card, CardContent, MenuItem, Select, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/tasklist');  // Correct path to navigate
    };

    return (
        <div>
            <Box 
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='100vh'
                bgcolor='#f5f5f5'
            >
                <Card
                    style={{
                        width: '400px',
                        padding: '20px',
                        boxShadow: '0px 0px 15px rgba(0,0,0,0.2)'
                    }}
                >
                    <CardContent>
                        <Typography variant='h6' gutterBottom>
                            Let's get you signed in
                        </Typography>

                        <InputLabel>Select an account</InputLabel>
                        <Select fullWidth defaultValue={1} style={{ marginBottom: '20px' }}>
                            <MenuItem value={1}>rufatjabbarov01@gmail.com</MenuItem>
                            <MenuItem value={2}>Add another account</MenuItem>
                        </Select>

                        <Button 
                            fullWidth
                            variant='contained'
                            color='primary'
                            onClick={handleContinue}
                            style={{ marginBottom: '10px' }}
                        >
                            Continue
                        </Button>

                        <Typography variant='body2' color="textSecondary" align='center'>
                            or sign in with different account
                        </Typography>

                        <Box mt={2}>
                            <Button fullWidth variant='outlined' color='primary' style={{ marginBottom: '10px' }}>
                                Work or school account
                            </Button>
                            <Button fullWidth variant='outlined' color='primary'>
                                Microsoft account
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <Box component='footer' sx={{ py: 3, backgroundColor: '#f7f7f7', textAlign: 'center' }}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' alt='Microsoft' style={{ width: '100px', height: 'auto' }} />
            </Box>
        </div>
    );
};

export default Dashboard;

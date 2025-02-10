import React, { useState } from 'react';
import { Container, Paper, TextField, Typography, Button } from '@mui/material';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin(!isLogin); // Toggle between login and register

  return (
    <div>
      <Container component="main" maxWidth="xs" sx={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"

      }}>
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 8, // Add some top margin for better spacing
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form style={{
                width:"100%",
                marginTop:"1rem"
              }}>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  type="text"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                />
                <Button
                  sx={{
                    marginTop: '1rem',
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>

                <Typography sx={{ textAlign:"center" ,marginTop: '1rem' }}>Don't have an account?</Typography>

                <Button
                  fullWidth
                  variant="text"
                  color="primary"
                  sx={{
                    margin: '1rem 0',
                  }}
                  onClick={toggleLogin}
                >
                  Register
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">Register</Typography>
              <form>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  type="text"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                />
                <Button
                  sx={{
                    marginTop: '1rem',
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Register
                </Button>

                <Typography sx={{ textAlign:"center",marginTop: '1rem' }}>Already have an account?</Typography>

                <Button
                  fullWidth
                  variant="text"
                  color="primary"
                  sx={{
                    margin: '1rem 0',
                  }}
                  onClick={toggleLogin}
                >
                  Login
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
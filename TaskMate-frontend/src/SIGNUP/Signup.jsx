

import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../SIGNUP/signup.css';

const SignupPage = () => {
  const [formdata, setFormdata] = useState({ username: '', email: '', password: '' });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [signupError, setSignupError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!formdata.username.trim()) {
      newErrors.username = 'Name is required';
      isValid = false;
    } else if (formdata.username.length > 20) {
      newErrors.username = 'Name must not exceed 20 characters';
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(formdata.username)) {
      newErrors.username = 'Name can only contain letters and spaces';
      isValid = false;
    }

    if (!formdata.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formdata.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formdata.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else {
      if (formdata.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
        isValid = false;
      } else if (formdata.password.length > 20) {
        newErrors.password = 'Password must not exceed 20 characters';
        isValid = false;
      }
      if (!/[A-Z]/.test(formdata.password)) {
        newErrors.password = 'Password must include at least one capital letter';
        isValid = false;
      }
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(formdata.password)) {
        newErrors.password = 'Password must include at least one special character';
        isValid = false;
      }
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
      isValid = false;
    } else if (formdata.password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/user/signup', formdata, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (response.status === 200) {
        setSignupError('');
        setFormdata({ username: '', email: '', password: '' });
        setConfirmPassword('');
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        setSignupError(error.response.data.message || 'Signup failed.');
      } else {
        setSignupError('Something went wrong. Please try again.');
      }
    }
  };

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg,rgb(221, 224, 240), #f5f5f5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: '100%',
          maxWidth: 400,
          p: 4,
          borderRadius: 2,
          backgroundColor: '#fff',
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold', color: '#333' }}>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              name="username"
              value={formdata.username}
              onChange={handleChange}
              error={Boolean(errors.username)}
              helperText={errors.username}
            />
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              fullWidth
              required
              value={formdata.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <TextField
              label="Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              required
              name="password"
              value={formdata.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              type={showConfirmPassword ? 'text' : 'password'}
              fullWidth
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowConfirmPassword} edge="end">
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" variant="contained" color="primary" size="large">
              Sign Up
            </Button>
            {signupError && <Alert severity="error">{signupError}</Alert>}
          </Stack>
        </form>
        <p className="text-center mt-4">
  Already have an account? <a href="/login" className="text-blue-500">Log in</a>
</p>

      </Paper>
    </Box>
  );
};

export default SignupPage;


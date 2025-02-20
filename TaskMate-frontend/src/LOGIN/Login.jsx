import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Person, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import "./login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      const response = await axios.get(`http://localhost:8080/api/user/login`, {
        params: { email, password },
      });
  
      if (response.data.code === 200 && response.data.status === "success") {
        console.log("Login Successful:", response.data);
        
        // Store the token in sessionStorage (or localStorage if needed)
        sessionStorage.setItem("token", response.data.data);
        
        // Navigate to Dashboard
        navigate("/dashboard");
      } else {
        setError(response.data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Login failed. Please try again.");
    }
  };
  

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box className="login-root">
      <Grid container className="login-grid">
        <Grid item xs={12} md={6} className="login-left-panel">
          <Box className="welcome-content">
            <Typography variant="h4" className="welcome-title">
              Heyy there.........!!
            </Typography>
            <img
              src="https://img.freepik.com/free-vector/welcome-word-flat-cartoon-people-characters_81522-4207.jpg?ga=GA1.1.550951407.1736775294&semt=ais_hybrid"
              alt="Welcome Illustration"
              className="welcome-image"
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6} className="login-right-panel">
          <Box className="login-form-container">
            <Typography
              variant="h5"
              align="center"
              sx={{ mb: 3, fontWeight: "bold" }}
            >
              LOGIN
            </Typography>
            <Paper elevation={3} className="login-paper">
              <form onSubmit={handleSubmit} className="login-form">
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  size="small"
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  size="small"
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                {error && (
                  <Typography color="error" align="center" sx={{ mt: 1 }}>
                    {error}
                  </Typography>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2, fontWeight: "bold" }}
                >
                  LOGIN
                </Button>

                <Typography align="center" sx={{ mt: 2 }}>
                  Not a member yet?{" "}
                  <Link href="/signup" underline="hover">
                    Sign Up
                  </Link>
                </Typography>
              </form>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;

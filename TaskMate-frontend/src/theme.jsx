// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Indigo
    },
    secondary: {
      main: '#ff4081', // Pink
    },
    success: {
      main: '#4caf50', // Green
    },
    warning: {
      main: '#ff9800', // Orange
    },
    error: {
      main: '#f44336', // Red
    },
    background: {
      default: '#f8f9fa', // Light grey background
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h5: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8, // More rounded corners for MUI components
  },
  components: {
    // Example overrides
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

export default theme;

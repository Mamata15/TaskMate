import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </LocalizationProvider> */}
  </React.StrictMode>
);

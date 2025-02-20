import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../src/LOGIN/Login';
import SignupPage from '../src/SIGNUP/Signup';
import Dashboard from '../src/DASHBOARD/Dashboard';
import PrivateRoute from './HELPER/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

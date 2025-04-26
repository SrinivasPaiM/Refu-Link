import React from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegistrationForm from './pages/RegistrationForm';
import ResultsPage from './ResultsPage';
import LandingPage from './pages/LandingPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  );
}

export default App;

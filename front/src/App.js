import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/admin/Header';
import Sidebar from './components/admin/Sidebar';
import Home from './components/admin/Home';
import Employee from './components/admin/Employee';
import './App.css';

// Composant Dashboard pour la page d'accueil
function Dashboard() {
  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <Home />
      </div>
    </div>
  );
}

function EmployeePage() {
  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <Employee /> {}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<EmployeePage />} /> {}
      </Routes>
    </Router>
  );
}

export default App;

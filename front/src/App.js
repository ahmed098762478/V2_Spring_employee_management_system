// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/admin/Header';
import Sidebar from './components/admin/Sidebar';
import Home from './components/admin/Home';
import Employee from './components/admin/Employee';
import Salaries from './components/admin/Salaries';  
import Login from './components/Login'; 
import './App.css';

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
        <Employee />
      </div>
    </div>
  );
}

function SalariesPage() {
  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <Salaries />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<EmployeePage />} />
        <Route path="/salaries" element={<SalariesPage />} />
        <Route path="/login" element={<Login />} /> {}
      </Routes>
    </Router>
  );
}

export default App;

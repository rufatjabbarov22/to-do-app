// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import TaskList from './pages/TaskList';  // TaskList component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasklist" element={<TaskList />} />  {/* Correct path as /tasklist */}
      </Routes>
    </Router>
  );
}

export default App;

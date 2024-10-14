import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Tugas6 from './tugas_6/tugas6';
import Tugas7 from './tugas_7/tugas7';
import Tugas8 from './tugas_8/tugas8';
import Tugas9 from './tugas_9/tugas9';
import Tugas10 from './tugas_10/tugas10';
import Tugas11 from './tugas_11/tugas11';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Tugas6 />} />
        <Route path="/tugas7" element={<Tugas7 />} />
        <Route path="/tugas8" element={<Tugas8 />} />
        <Route path="/tugas9" element={<Tugas9 />} />
        <Route path="/tugas10" element={<Tugas10 />} />
        <Route path="/tugas11" element={<Tugas11 />} />
      </Routes>
    </Router>
  );
};

export default App;

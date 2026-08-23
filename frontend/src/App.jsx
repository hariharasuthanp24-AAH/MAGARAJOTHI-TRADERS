import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EnquirePage from './pages/EnquirePage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/enquire" element={<EnquirePage />} />
          <Route path="/contact" element={<EnquirePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        
        {/* Floating Global Action Buttons */}
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;

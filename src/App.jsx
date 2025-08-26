import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ThemeToggle from './components/ThemeToggle';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div
      className={theme === 'dark' ? 'bg-dark text-white min-vh-100 d-flex flex-column' : 'bg-light text-dark min-vh-100 d-flex flex-column'}
      style={{
        background: theme === 'light'
          ? 'linear-gradient(to bottom right, #f8f9fa, #e9ecef)'
          : 'linear-gradient(to bottom right, #1c1c1c, #343a40)'
      }}
    >
      <Router>
        <nav className={`navbar navbar-expand-lg ${theme === 'light' ? 'navbar-light bg-white' : 'navbar-dark bg-dark'} shadow-sm sticky-top`}>
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
              <img src="/assets/shuffle-logo.png" alt="Shuffle Logo" width="40" height="40" />
              Shuffle Store
            </Link>
            <div className="d-flex gap-2">
              <Link className="btn btn-outline-secondary" to="/cart">🛒 Cart</Link>
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>

      {/* Footer */}
      <footer className={`text-center py-3 mt-auto ${theme === 'light' ? 'bg-white text-muted' : 'bg-dark text-light'}`}>
        <small>&copy; {new Date().getFullYear()} Shuffle Sir Videogame Store. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { games } from '../data';
import GameCard from '../components/GameCard';

const Home = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredGames, setFilteredGames] = useState([]);

  const categories = ['All', ...new Set(games.map(game => game.category))];

  useEffect(() => {
    const shuffled = [...games].sort(() => 0.5 - Math.random());
    setFilteredGames(shuffled);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      const shuffled = [...games].sort(() => 0.5 - Math.random());
      setFilteredGames(shuffled);
    } else {
      const filtered = games.filter(game => game.category === selectedCategory);
      setFilteredGames(filtered);
    }
  }, [selectedCategory]);
  <img src="/assets/shuffle-logo.png" alt="Shuffle Logo" width="40" height="40" />

  return (
    <div className="container mt-4">
      {/* Hero Banner */}
      <div className="p-4 mb-4 rounded text-center" style={{
        background: theme === 'light' ? '#f0f8ff' : '#1c1c1c',
        color: theme === 'light' ? '#000' : '#fff'
      }}>
        <h1 className="display-5">Welcome to Shuffle Store</h1>
        <p className="lead">Browse, shuffle, and grab your favorite games — just like Steam, but built by you.</p>
      </div>

      {/* Category Dropdown */}
      <div className="mb-4">
        <label className="form-label fw-bold">Sort by Category:</label>
        <select
          className="form-select"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Game Cards */}
      <div className="row">
        {filteredGames.length > 0 ? (
          filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))
        ) : (
          <p>No games found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
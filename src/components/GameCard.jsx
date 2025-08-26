import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const GameCard = ({ game }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={game.image}
          alt={game.title}
          className="card-img-top"
          style={{ height: '220px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
        />
        <div className="card-body d-flex flex-column bg-light">
          <h5 className="card-title fw-bold">{game.title}</h5>
          <p className="card-text mb-1"><strong>Genre:</strong> {game.category}</p>
          <p className="card-text mb-1"><strong>Price:</strong> ${game.price}</p>
          <p className="card-text mb-2">
            {game.inStock ? (
              <span className="badge bg-success">In Stock</span>
            ) : (
              <span className="badge bg-danger">Out of Stock</span>
            )}
          </p>
          <button
            className="btn btn-outline-primary mt-auto"
            disabled={!game.inStock}
            onClick={() => dispatch(addToCart(game))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
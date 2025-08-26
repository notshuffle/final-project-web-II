import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="card mb-2 shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5>{item.title}</h5>
                <p>${item.price}</p>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
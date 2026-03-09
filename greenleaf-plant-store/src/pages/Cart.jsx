import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { 
  selectCartItems, 
  selectCartItemCount, 
  selectCartTotal,
  increaseItem,
  decreaseItem,
  removeItem 
} from '../redux/cartSlice';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartItemCount);
  const totalCost = useSelector(selectCartTotal);

  const handleIncrease = (id) => {
    dispatch(increaseItem({ id }));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseItem({ id }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleCheckout = () => {
    alert('Checkout Coming Soon');
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const cartItemsArray = Object.entries(cartItems).map(([id, item]) => ({
    id: parseInt(id),
    ...item
  }));

  return (
    <div className="cart-page">
      <Header />
      <main className="cart-main">
        <div className="cart-container">
          <h1 className="cart-title">Shopping Cart</h1>
          
          {cartItemsArray.length === 0 ? (
            <div className="empty-cart">
              <p className="empty-cart-icon">🛒</p>
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added any plants yet!</p>
              <button className="continue-shopping-btn" onClick={handleContinueShopping}>
                Browse Plants
              </button>
            </div>
          ) : (
            <>
              <div className="cart-summary">
                <div className="summary-item">
                  <span>Total Plants:</span>
                  <span className="summary-value">{totalItems}</span>
                </div>
                <div className="summary-item total">
                  <span>Total Cost:</span>
                  <span className="summary-value">${totalCost.toFixed(2)}</span>
                </div>
              </div>

              <div className="cart-items">
                {cartItemsArray.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image-container">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="item-image"
                      />
                    </div>
                    <div className="item-details">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-price">${item.price.toFixed(2)} each</p>
                    </div>
                    <div className="item-quantity">
                      <button 
                        className="quantity-btn"
                        onClick={() => handleDecrease(item.id)}
                      >
                        −
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => handleIncrease(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <div className="item-subtotal">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button 
                      className="delete-btn"
                      onClick={() => handleRemove(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-actions">
                <button className="continue-shopping-btn" onClick={handleContinueShopping}>
                  Continue Shopping
                </button>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;

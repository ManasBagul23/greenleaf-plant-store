import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectIsItemInCart } from '../redux/cartSlice';
import './PlantCard.css';

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const isInCart = useSelector(selectIsItemInCart(plant.id));

  const handleAddToCart = () => {
    dispatch(addItem({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      image: plant.image
    }));
  };

  return (
    <div className="plant-card">
      <div className="plant-image-container">
        <img 
          src={plant.image} 
          alt={plant.name} 
          className="plant-image"
        />
      </div>
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-description">{plant.description}</p>
        <p className="plant-price">${plant.price.toFixed(2)}</p>
        <button 
          className={`add-to-cart-btn ${isInCart ? 'disabled' : ''}`}
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default PlantCard;

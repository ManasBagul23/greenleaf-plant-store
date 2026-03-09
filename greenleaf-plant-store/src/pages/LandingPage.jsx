import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1 className="landing-title">GreenLeaf Plant Store</h1>
          <p className="landing-description">
            Welcome to GreenLeaf, your premier destination for beautiful, healthy houseplants. 
            We believe that every space deserves a touch of nature. Our carefully curated 
            collection features air-purifying plants, stunning succulents, and decorative 
            greenery to transform your home or office into a thriving oasis. Let us help 
            you bring the outdoors in and create a greener, happier living space.
          </p>
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

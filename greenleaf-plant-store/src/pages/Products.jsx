import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import plants, { categories, getPlantsByCategory } from '../data/plants';
import './Products.css';

const Products = () => {
  return (
    <div className="products-page">
      <Header />
      <main className="products-main">
        <div className="products-container">
          <h1 className="products-title">Our Plants Collection</h1>
          <p className="products-subtitle">
            Discover our carefully selected houseplants for every space
          </p>
          
          {categories.map((category) => (
            <section key={category} className="category-section">
              <h2 className="category-title">{category}</h2>
              <div className="plants-grid">
                {getPlantsByCategory(category).map((plant) => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;

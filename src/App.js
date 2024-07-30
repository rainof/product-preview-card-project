import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import product_img from './images/image-product-mobile.jpg';

function App() {
  return (
    <div className="card">
      <div className="product">
        <img className="product-img" src={product_img} alt="product" />
        <div className="product-label">Perfume</div>
        <div className="product-name">Gabrielle Essence Eau De Parfum</div>
        <div className="product-detail">A floral, solar and voluptuous interpretation composed by Olivier Polge,
      Perfumer-Creator for the House of CHANEL.</div>
      </div>
      <div className="payment">
        <div className="discount-cost">$149.99</div>
        <div className="actual-cost">$169.99</div>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}

export default App;

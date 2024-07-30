import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import product_img from './assets/images/image-product-mobile.jpg';
import cart_img from './assets/images/icon-cart.svg';

function App() {
  return (
    <div className="card">
      <img className="product-img" src={product_img} alt="product" />
      <div className="product">
        <div className="product-label">P E R F U M E</div>
        <div className="product-name">Gabrielle Essence Eau De Parfum</div>
        <div className="product-detail">A floral, solar and voluptuous interpretation composed by Olivier Polge,
      Perfumer-Creator for the House of CHANEL.</div>
        <div className="product-promotion">
          <div className="discounted-cost">$149.99</div>
          <div className="before-discounted-cost">$169.99</div>
        </div>
        <button className="payment_button">
          <img className="cart_icon" src={cart_img} alt="cart" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default App;

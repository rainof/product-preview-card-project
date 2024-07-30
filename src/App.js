import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import cart_img from './assets/images/icon-cart.svg';

function App({data}) {
  const { product_label, product_name, product_detail, discounted_cost, before_discounted_cost } = data;

  return (
    <div className="card">
      {/* <img className="product_img" src={product_img} alt="product" /> */}
      <div className="product_img"></div>
      <div className="product">
        <div className="product_label">{product_label}</div>
        <div className="product_name">{product_name}</div>
        <div className="product_detail">{product_detail}</div>
        <div className="product_promotion">
          <div className="discounted_cost">{discounted_cost}</div>
          <div className="before_discounted_cost">{before_discounted_cost}</div>
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

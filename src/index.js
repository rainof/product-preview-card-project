import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appData = {
  product_label: "PERFUME",
  product_name: "Gabrielle Essence Eau De Parfum",
  product_detail: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
  discounted_cost: "$149.99",
  before_discounted_cost: "$169.99"
};

root.render(
  <React.StrictMode>
    <App data={appData} />
  </React.StrictMode>
);

reportWebVitals();

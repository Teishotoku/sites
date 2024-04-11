// LIBRARY
import React from 'react';
import ReactDOM from 'react-dom/client';

// FILES
import './style/index.scss';
import App from './App';
import Footer from './components/Footer';
import Burger from './components/Burger';
import Slider from './components/Slider';
import Reviews from './components/Reviews';
import Customizaton from './components/Customization';
import Shop from './components/Shop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Burger/>
    <App/>
    <Slider/>
    <Reviews/>
    <Customizaton/>
    <Shop/>
    <Footer/>
  </React.StrictMode>
);


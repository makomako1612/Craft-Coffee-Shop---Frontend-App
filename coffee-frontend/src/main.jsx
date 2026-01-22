import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CoffeeProvider } from './context/CoffeeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoffeeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CoffeeProvider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "bootstrap-icons/font/bootstrap-icons.css";
import { ScrollToTop } from './components';
import { FilterProvider } from './context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <ScrollToTop />
        <App />
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>
);



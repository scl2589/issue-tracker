import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import './Styles/index.css';

ReactDOM.render(
  <BrowserRouter>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);

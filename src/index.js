import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store';

store.dispatch({type: 'create/customer', payload: {fullName:'Idris Muyideen', id: 69, createdAt: new Date().toISOString()}})
console.log(store.getState())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


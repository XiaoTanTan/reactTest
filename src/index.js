import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // 记录页面上的性能的

const root = ReactDOM.createRoot(document.getElementById('root'));
// app外侧包裹：检查app代码不合理的地方
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

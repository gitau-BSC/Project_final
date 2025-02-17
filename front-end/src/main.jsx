// filepath: /c:/Users/HP/Desktop/facial-recognition-hostel/front-end/src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './assets/Css/index.css';

const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render your app
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
import { createRoot } from 'react-dom/client';
import { App } from './App';
import React = require('react');
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

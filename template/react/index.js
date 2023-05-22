import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root');

const root = createRoot(container);

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />
  }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
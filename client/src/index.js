import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import './styles/main.scss';
import { RouterProvider, } from "react-router-dom";
import { routes } from './routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
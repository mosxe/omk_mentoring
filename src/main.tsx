import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from 'components/Error';
import MainPage from './pages/Main';
import FormResult from './pages/FormResult';
import { register } from 'swiper/element/bundle';
import './index.css';

register();

const router = createBrowserRouter([
  {
    path: '/*',
    element: <MainPage />,
    errorElement: <Error />
  },
  {
    path: '/omk_mentoring/:id',
    element: <FormResult />,
    errorElement: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById('root-mentoring')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

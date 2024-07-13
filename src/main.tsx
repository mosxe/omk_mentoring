import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from 'components/Error';
import MainPage from './pages/Main';
import ErrorPage from './pages/Error';
import { register } from 'swiper/element/bundle';
import './index.css';

register();

const router = createBrowserRouter([
  {
    path: '/omk_mentoring',
    element: <MainPage />,
    errorElement: <Error />
  },
  // {
  //   path: '/omk_mentoring/:id',
  //   element: <MaterialPage />,
  //   errorElement: <Error />
  // },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root-mentoring')!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

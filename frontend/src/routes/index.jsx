import { createBrowserRouter } from 'react-router-dom';
// import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';
import InputPage from '../pages/InputPage';
import Dashboard from '../pages/Dashboard';
import Schedule from '../pages/Schedule';
import LandingPage from '../pages/LandingPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/input',
    element: <InputPage />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/schedule',
    element: <Schedule />
  },
]); 
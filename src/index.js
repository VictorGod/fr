import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { Main } from './pages/main';
import { MainLayout } from './components/Layouts/MainLayout';

const container = document.getElementById('root');
const root = createRoot(container);
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [{ path: ROUTES.MAIN, element: <Main /> }],
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
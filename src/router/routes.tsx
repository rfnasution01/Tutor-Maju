import { createBrowserRouter } from 'react-router-dom'
import {
  AppLayout,
  HomeApp,
  HomePage,
  NotFoundPage,
  RootLayout,
} from './loadables'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'app',
        element: <AppLayout />,
        children: [
          { path: '', element: <HomeApp /> },
          { path: 'dashboard', element: <HomeApp /> },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

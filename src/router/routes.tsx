import { createBrowserRouter } from 'react-router-dom'
import { AppLayout, HomePage, NotFoundPage, RootLayout } from './loadables'


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
        element: <AppLayout />
      }
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

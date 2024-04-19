import { createBrowserRouter } from 'react-router-dom'
import {
  AppLayout,
  ComingSoonPage,
  CoursesApp,
  FileApp,
  HomePage,
  LoginLayout,
  LoginPage,
  NotFoundPage,
  RootLayout,
  TryOutApp,
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
          { path: '', element: <ComingSoonPage /> },
          { path: 'dashboard', element: <ComingSoonPage /> },
          { path: 'courses', element: <CoursesApp /> },
          { path: 'try-out', element: <TryOutApp /> },
          { path: 'forum', element: <ComingSoonPage /> },
          { path: 'file', element: <FileApp /> },
          { path: 'settings', element: <ComingSoonPage /> },
        ],
      },
      {
        path: 'login',
        element: <LoginLayout />,
        children: [
          {
            path: '',
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

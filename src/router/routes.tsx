import { createBrowserRouter } from 'react-router-dom'
import {
  AppLayout,
  ComingSoonPage,
  CoursesApp,
  HomeApp,
  HomePage,
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
          { path: '', element: <HomeApp /> },
          { path: 'dashboard', element: <HomeApp /> },
          { path: 'courses', element: <CoursesApp /> },
          { path: 'try-out', element: <TryOutApp /> },
          { path: 'forum', element: <ComingSoonPage /> },
          { path: 'file', element: <ComingSoonPage /> },
          { path: 'settings', element: <ComingSoonPage /> },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

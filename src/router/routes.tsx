import { createBrowserRouter } from 'react-router-dom'
import {
  ActivateAccountPage,
  AppLayout,
  ComingSoonPage,
  CoursesApp,
  FileApp,
  ForgotPasswordPage,
  HomePage,
  LoginLayout,
  LoginPage,
  NotFoundPage,
  RegistrasiLayout,
  RegistrasiPage,
  RootLayout,
  SettingApp,
  TryOutApp,
} from './loadables'
import Cookies from 'js-cookie'

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
        loader: async () => {
          const jwtPayload = Cookies.get('token')

          if (!jwtPayload) {
            window.location.href = `/login`
            Cookies.remove('token')
            return null
          }

          return null
        },
        children: [
          { path: '', element: <ComingSoonPage /> },
          { path: 'dashboard', element: <ComingSoonPage /> },
          { path: 'courses', element: <CoursesApp /> },
          { path: 'try-out', element: <TryOutApp /> },
          { path: 'forum', element: <ComingSoonPage /> },
          { path: 'file', element: <FileApp /> },
          { path: 'settings', element: <SettingApp /> },
        ],
      },
      {
        path: 'login',
        element: <LoginLayout />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')

          if (jwtPayload) {
            window.location.href = `/app`
            return null
          }

          return null
        },
        children: [
          {
            path: '',
            element: <LoginPage />,
          },
          {
            path: 'activate-account',
            element: <ActivateAccountPage />,
          },
          {
            path: 'forgot-password',
            element: <ForgotPasswordPage />,
          },
        ],
      },
      {
        path: 'registrasi',
        element: <RegistrasiLayout />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')

          if (jwtPayload) {
            window.location.href = `/app`
            return null
          }

          return null
        },
        children: [
          {
            path: '',
            element: <RegistrasiPage />,
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

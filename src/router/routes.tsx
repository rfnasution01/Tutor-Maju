import { createBrowserRouter, redirect } from 'react-router-dom'
import {
  ActivateAccountPage,
  AppLayout,
  CBTApp,
  ComingSoonPage,
  CoursesApp,
  ExamLayout,
  FileApp,
  ForgotPasswordPage,
  HomePage,
  LoginLayout,
  LoginPage,
  NewsLayout,
  NotFoundPage,
  PostLayout,
  RegistrasiLayout,
  RegistrasiPage,
  ResultLayout,
  RootLayout,
  SettingApp,
  TryOutApp,
  UjianPage,
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
        loader: async () => {
          const jwtPayload = Cookies.get('token')

          if (!jwtPayload) {
            return redirect('/login')
          }

          return null
        },
      },
      {
        path: 'news',
        element: <NewsLayout />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')

          if (!jwtPayload) {
            return redirect('/login')
          }

          return null
        },
      },
      {
        path: 'post',
        element: <PostLayout />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')

          if (!jwtPayload) {
            return redirect('/login')
          }

          return null
        },
      },
      {
        path: 'ujian',
        element: <UjianPage />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')

          if (!jwtPayload) {
            return redirect('/login')
          }

          return null
        },
      },
      {
        path: 'app',
        element: <AppLayout />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')

          if (!jwtPayload) {
            return redirect('/login')
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
          { path: 'cbt', element: <CBTApp /> },
        ],
      },
      {
        path: 'login',
        element: <LoginLayout />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')

          if (jwtPayload) {
            return redirect('/app')
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
            return redirect('/app')
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
      {
        path: 'exam',
        element: <ExamLayout />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')

          if (!jwtPayload) {
            return redirect('/login')
          }

          return null
        },
      },
      {
        path: 'result',
        element: <ResultLayout />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')

          if (!jwtPayload) {
            return redirect('/login')
          }

          return null
        },
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

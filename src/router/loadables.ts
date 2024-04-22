import loadable from '@loadable/component'

// ------------------
// ----- Layout -----
// ------------------

export const RootLayout = loadable(() => import('@/App'))
export const AppLayout = loadable(() => import('@/features/layout/app-layout'))
export const LoginLayout = loadable(
  () => import('@/features/layout/login-layout'),
)
export const RegistrasiLayout = loadable(
  () => import('@/features/layout/registrasi-layout'),
)
export const NewsLayout = loadable(
  () => import('@/features/layout/news-layout'),
)
export const PostLayout = loadable(
  () => import('@/features/layout/post-layout'),
)

// -----------------
// ----- Pages -----
// -----------------
export const HomePage = loadable(() => import('@/pages/home'))
export const ComingSoonPage = loadable(() => import('@/pages/coming-soon'))
export const NotFoundPage = loadable(() => import('@/pages/not-found'))

// ----- App ----
export const CoursesApp = loadable(() => import('@/pages/app/courses'))
export const TryOutApp = loadable(() => import('@/pages/app/tryout'))
export const FileApp = loadable(() => import('@/pages/app/file'))
export const SettingApp = loadable(() => import('@/pages/app/setting'))
export const CBTApp = loadable(() => import('@/pages/app/cbt'))

// ----- Login -----
export const LoginPage = loadable(() => import('@/pages/login'))
export const ActivateAccountPage = loadable(
  () => import('@/pages/login/active-account'),
)
export const ForgotPasswordPage = loadable(
  () => import('@/pages/login/forgot-password'),
)

// ----- Registrasi -----
export const RegistrasiPage = loadable(() => import('@/pages/registrasi'))

// ----- CBT ----
export const UjianPage = loadable(() => import('@/pages/ujian'))

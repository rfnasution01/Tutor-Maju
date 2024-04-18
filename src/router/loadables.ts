import loadable from '@loadable/component'

// ------------------
// ----- Layout -----
// ------------------

export const RootLayout = loadable(() => import('@/App'))
export const AppLayout = loadable(() => import('@/features/layout/app-layout'))

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

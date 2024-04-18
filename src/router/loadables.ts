import loadable from '@loadable/component'

// ----- Layout -----
export const RootLayout = loadable(() => import('@/App'))

// ----- Pages -----
export const HomePage = loadable(() => import('@/pages/home'))
export const ComingSoonPage = loadable(() => import('@/pages/coming-soon'))
export const NotFoundPage = loadable(() => import('@/pages/not-found'))

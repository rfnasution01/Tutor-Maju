import { Outlet } from 'react-router-dom'
import { AsideNavigationApp, AsideProgressApp } from '../aside-app'

export default function AppLayout() {
  return (
    <main className="scrollbar overflow-scrol grid h-full grid-cols-12">
      <aside className="col-span-2 h-screen">
        <AsideNavigationApp />
      </aside>
      <section className="col-span-8 bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
        <Outlet />
      </section>
      <aside className="col-span-2 h-screen">
        <AsideProgressApp />
      </aside>
    </main>
  )
}

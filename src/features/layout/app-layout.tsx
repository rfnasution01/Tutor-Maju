import { Outlet } from 'react-router-dom'
import { AsideNavigationApp, AsideProgressApp } from '../aside-app'

export default function AppLayout() {
  return (
    <main className="scrollbar grid h-full grid-cols-12 overflow-scroll">
      <aside className="col-span-2">
        <AsideNavigationApp />
      </aside>
      <section className="col-span-8">
        <Outlet />
      </section>
      <aside className="col-span-2">
        <AsideProgressApp />
      </aside>
    </main>
  )
}

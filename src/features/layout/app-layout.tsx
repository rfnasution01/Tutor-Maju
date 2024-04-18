import { Outlet } from 'react-router-dom'
import { AsideNavigationApp, AsideProgressApp } from '../aside-app'
import { BellDot } from 'lucide-react'

export default function AppLayout() {
  return (
    <main className="scrollbar overflow-scrol grid h-full grid-cols-12">
      <aside className="col-span-2 h-screen">
        <AsideNavigationApp />
      </aside>
      <section className="scrollbar col-span-8 flex h-screen flex-col gap-y-24 overflow-y-auto bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
        <div className="flex items-center justify-between gap-x-48 px-48 pt-32">
          <input
            type="text"
            className="w-6/12 rounded-lg border border-gray-300 p-16 text-[2rem] focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            placeholder="Search"
          />
          <span>
            <BellDot />
          </span>
        </div>
        <div className="scrollbar h-full overflow-y-auto px-48 pb-48 pt-24">
          <Outlet />
        </div>
      </section>
      <aside className="col-span-2 h-screen">
        <AsideProgressApp />
      </aside>
    </main>
  )
}

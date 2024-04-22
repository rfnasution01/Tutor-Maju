import { Outlet } from 'react-router-dom'
import { AsideHeader, AsideNavigationApp, AsideProgressApp } from '../aside-app'
import { useGetBiodataQuery } from '@/store/slices/biodataAPI'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setStateBiodataPribadi } from '@/store/reducer/statePribadi'
import { setStateBiodataSekolah } from '@/store/reducer/stateSekolah'

export default function AppLayout() {
  const dispatch = useDispatch()
  const { data: biodataData } = useGetBiodataQuery()

  useEffect(() => {
    if (biodataData?.data) {
      dispatch(setStateBiodataPribadi(biodataData?.data?.pribadi))
      dispatch(setStateBiodataSekolah(biodataData?.data?.sekolah))
    }
  }, [biodataData?.data])

  return (
    <main className="scrollbar grid h-full grid-cols-12 overflow-scroll">
      <aside className="col-span-2 block h-screen phones:hidden">
        <AsideNavigationApp />
      </aside>
      <section className="scrollbar col-span-8 flex h-screen flex-col gap-y-24 overflow-y-auto bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 phones:col-span-12">
        <AsideHeader />
        <div className="scrollbar h-full overflow-y-auto px-48 pb-48 pt-24">
          <Outlet />
        </div>
      </section>
      <aside className="col-span-2 block h-screen phones:hidden">
        <AsideProgressApp />
      </aside>
    </main>
  )
}

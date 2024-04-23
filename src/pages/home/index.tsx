import { MappingBerita } from '@/features/berita'
import { HeaderMobile, HeaderNavigation, Services } from '@/features/homepage'
import { MappingPengumuman } from '@/features/pengumuman'
import { useSearch } from '@/libs/hooks/useSearch'
import { BeritaType } from '@/libs/interface'
import { getSearchSlice } from '@/store/reducer/stateSearch'
import { useGetBeritaQuery } from '@/store/slices/beritaAPI'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  const { find } = useSelector(getSearchSlice)
  const { currentPage } = useSearch()
  const pageSize = 3
  const pageNumber = currentPage ?? 1
  const [berita, setBerita] = useState<BeritaType[]>()

  const { data } = useGetBeritaQuery({
    page_size: pageSize,
    page_number: pageNumber,
    search: find,
  })

  useEffect(() => {
    if (data) {
      setBerita(data?.data)
    }
  }, [data?.data])

  return (
    <main className="flex h-screen flex-col bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      <div className="block phones:hidden">
        <HeaderNavigation />
      </div>
      <div className="hidden phones:block">
        <HeaderMobile />
      </div>
      <div className="scrollbar flex max-h-full flex-1 flex-col gap-y-32 overflow-y-auto p-32">
        <div className="grid grid-cols-12 gap-32">
          <div className="col-span-9 phones:col-span-12">
            <MappingBerita berita={berita} />
          </div>
          <div className="col-span-3 phones:col-span-12">
            <MappingPengumuman />
          </div>
        </div>
        <div className="flex flex-col gap-y-32">
          <p className="font-roboto text-[3rem]">Services</p>
          <Services />
        </div>
      </div>
    </main>
  )
}

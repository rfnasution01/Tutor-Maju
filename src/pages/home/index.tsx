import { MappingBerita } from '@/features/berita'
import { HeaderMobile, HeaderNavigation } from '@/features/homepage'
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
  const [totalPage, setTotalPage] = useState<number>(0)

  const { data } = useGetBeritaQuery({
    page_size: pageSize,
    page_number: pageNumber,
    search: find,
  })

  useEffect(() => {
    if (data) {
      setBerita(data?.data)
    }
    if (data?.meta) {
      setTotalPage(data?.meta?.total)
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
      <div className="scrollbar grid max-h-full flex-1 grid-cols-12 gap-32 overflow-y-auto px-32 py-32">
        <div className="col-span-9 phones:order-last phones:col-span-12">
          <MappingBerita
            totalPage={totalPage === 0 ? 1 : Math.ceil(totalPage / pageSize)}
            berita={berita}
          />
        </div>
        <div className="col-span-3 phones:col-span-12">
          <MappingPengumuman />
        </div>
      </div>
    </main>
  )
}

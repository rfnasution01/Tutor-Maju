import { CardNews } from '@/components/ui/card'
import { MenuTitle } from '@/components/ui/title'
import { convertSlugToText } from '@/libs/helpers/format-text'
import { useSearch } from '@/libs/hooks/useSearch'
import { BeritaType } from '@/libs/interface'
import { getSearchSlice } from '@/store/reducer/stateSearch'
import { useGetBeritaKategoriQuery } from '@/store/slices/beritaAPI'
import { useGetPengumumanKategoriQuery } from '@/store/slices/pengumunanAPI'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function NewsType() {
  const { find } = useSelector(getSearchSlice)
  const { currentPage } = useSearch()
  const pageSize = 3
  const pageNumber = currentPage ?? 1
  const [berita, setBerita] = useState<BeritaType[]>()
  const [pengumuman, setPengumuman] = useState<BeritaType[]>()
  const searchParams = new URLSearchParams(location.search)
  const typeParams = searchParams.get('type')

  const data = typeParams?.includes('berita-utama') ? berita : pengumuman

  const { data: dataBerita } = useGetBeritaKategoriQuery(
    {
      page_size: pageSize,
      page_number: pageNumber,
      search: find,
      seo_kategori: typeParams,
    },
    { skip: typeParams === null },
  )

  useEffect(() => {
    if (dataBerita?.data) {
      setBerita(dataBerita?.data)
    }
  }, [dataBerita?.data, find])

  const { data: dataPengumuman } = useGetPengumumanKategoriQuery(
    {
      page_size: pageSize,
      page_number: pageNumber,
      search: find,
      seo_kategori: typeParams,
    },
    { skip: typeParams === null },
  )

  useEffect(() => {
    if (dataPengumuman?.data) {
      setPengumuman(dataPengumuman?.data)
    }
  }, [dataPengumuman?.data, find])
  return (
    <>
      <MenuTitle title={convertSlugToText(typeParams)} />
      <CardNews data={data} />
    </>
  )
}

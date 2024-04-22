import { BeritaDetailType } from '@/libs/interface'
import { useGetBeritaDetailQuery } from '@/store/slices/beritaAPI'
import { useGetPengumumanDetailQuery } from '@/store/slices/pengumunanAPI'
import { useEffect, useState } from 'react'

export function PostDetail() {
  const [detailBerita, setDetailBerita] = useState<BeritaDetailType[]>()
  const [beritaRelated, setBeritaRelated] = useState<BeritaDetailType[]>()
  const [detailPengumuman, setDetailPengumuman] = useState<BeritaDetailType[]>()
  const [pengumumanRelated, setPengumumanRelated] =
    useState<BeritaDetailType[]>()
  const searchParams = new URLSearchParams(location.search)
  const pageParams = searchParams.get('page')

  const { data: dataDetailBerita } = useGetBeritaDetailQuery(
    {
      seo: pageParams,
    },
    { skip: pageParams === null },
  )

  useEffect(() => {
    if (dataDetailBerita?.data) {
      setDetailBerita(dataDetailBerita?.data)
    }
    if (dataDetailBerita?.related) {
      setBeritaRelated(dataDetailBerita?.related)
    }
  }, [dataDetailBerita?.data])

  const { data: dataDetailPengumuman } = useGetPengumumanDetailQuery(
    {
      seo: pageParams,
    },
    { skip: pageParams === null },
  )

  useEffect(() => {
    if (dataDetailPengumuman?.data) {
      setDetailPengumuman(dataDetailPengumuman?.data)
    }
    if (dataDetailPengumuman?.related) {
      setPengumumanRelated(dataDetailPengumuman?.related)
    }
  }, [dataDetailPengumuman?.data])

  return <div className="grid grid-cols-12 gap-32">Tes</div>
}

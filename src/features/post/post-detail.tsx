import { BeritaDetailType } from '@/libs/interface'
import { useGetBeritaDetailQuery } from '@/store/slices/beritaAPI'
import { useGetPengumumanDetailQuery } from '@/store/slices/pengumunanAPI'
import { useEffect, useState } from 'react'
import { PostContent } from './post-content'
import { PostRelated } from './post-related'

export function PostDetail() {
  const [detailBerita, setDetailBerita] = useState<BeritaDetailType[]>()
  const [beritaRelated, setBeritaRelated] = useState<BeritaDetailType[]>()
  const [detailPengumuman, setDetailPengumuman] = useState<BeritaDetailType[]>()
  const [pengumumanRelated, setPengumumanRelated] =
    useState<BeritaDetailType[]>()
  const searchParams = new URLSearchParams(location.search)
  const contentParams = searchParams.get('content')
  const typeParams = searchParams.get('type')

  const { data: dataDetailBerita } = useGetBeritaDetailQuery(
    {
      seo: contentParams,
    },
    { skip: contentParams === null },
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
      seo: contentParams,
    },
    { skip: contentParams === null },
  )

  useEffect(() => {
    if (dataDetailPengumuman?.data) {
      setDetailPengumuman(dataDetailPengumuman?.data)
    }
    if (dataDetailPengumuman?.related) {
      setPengumumanRelated(dataDetailPengumuman?.related)
    }
  }, [dataDetailPengumuman?.data])

  return (
    <div className="grid grid-cols-12 gap-32">
      <PostContent
        data={
          typeParams.includes('pengumuman') ? detailPengumuman : detailBerita
        }
      />
      <PostRelated
        data={
          typeParams.includes('pengumuman') ? pengumumanRelated : beritaRelated
        }
      />
    </div>
  )
}

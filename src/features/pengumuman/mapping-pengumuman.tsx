import { CardNews2, CardNews2Skeleton } from '@/components/ui/card'
import { MenuTitle } from '@/components/ui/title'
import { BeritaType } from '@/libs/interface'
import DataNotFound from '@/pages/data-not-found'
import { useGetPengumumanQuery } from '@/store/slices/pengumunanAPI'
import { useEffect, useState } from 'react'

export function MappingPengumuman() {
  const pageSize = 3
  const pageNumber = 1
  const [pengumuman, setPengumuman] = useState<BeritaType[]>()

  const {
    data: dataPengumuman,
    isLoading,
    isFetching,
  } = useGetPengumumanQuery({
    page_size: pageSize,
    page_number: pageNumber,
    search: '',
  })

  useEffect(() => {
    if (dataPengumuman?.data) {
      setPengumuman(dataPengumuman?.data)
    }
  }, [dataPengumuman?.data])

  return (
    <div className="flex h-full flex-col gap-y-32">
      <MenuTitle title="Trending" />
      {isLoading || isFetching ? (
        <CardNews2Skeleton />
      ) : pengumuman?.length === 0 ? (
        <DataNotFound />
      ) : (
        <CardNews2 data={pengumuman} />
      )}
    </div>
  )
}

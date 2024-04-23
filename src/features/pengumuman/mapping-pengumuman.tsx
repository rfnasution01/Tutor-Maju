import { CardNews2 } from '@/components/ui/card'
import { MenuTitle } from '@/components/ui/title'
import { BeritaType } from '@/libs/interface'
import { useGetPengumumanQuery } from '@/store/slices/pengumunanAPI'
import { useEffect, useState } from 'react'

export function MappingPengumuman() {
  const pageSize = 3
  const pageNumber = 1
  const [pengumuman, setPengumuman] = useState<BeritaType[]>()

  const { data: dataPengumuman } = useGetPengumumanQuery({
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
      <CardNews2 data={pengumuman} />
    </div>
  )
}

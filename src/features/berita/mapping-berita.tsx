import { CardNews, CardNewsSkeleton } from '@/components/ui/card'
import { MenuTitle } from '@/components/ui/title'
import { BeritaType } from '@/libs/interface'
import DataNotFound from '@/pages/data-not-found'

export function MappingBerita({
  berita,
  isLoading,
}: {
  berita: BeritaType[]
  isLoading?: boolean
}) {
  return (
    <div className="scrollbar flex flex-col gap-y-32 overflow-y-auto">
      <MenuTitle title="News" />
      {isLoading ? (
        <CardNewsSkeleton />
      ) : berita?.length === 0 ? (
        <DataNotFound />
      ) : (
        <CardNews data={berita} />
      )}
    </div>
  )
}

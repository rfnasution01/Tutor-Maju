import { CardNews } from '@/components/ui/card'
import { MenuTitle } from '@/components/ui/title'
import { BeritaType } from '@/libs/interface'

export function MappingBerita({ berita }: { berita: BeritaType[] }) {
  return (
    <div className="scrollbar flex  flex-col gap-y-32 overflow-y-auto">
      <MenuTitle title="News" />
      <CardNews data={berita} />
    </div>
  )
}

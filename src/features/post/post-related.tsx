import { CardDetailNews2 } from '@/components/ui/card'
import { MenuTitle } from '@/components/ui/title'
import { BeritaDetailType } from '@/libs/interface'

export function PostRelated({ data }: { data: BeritaDetailType[] }) {
  return (
    <div className="col-span-3 flex flex-col gap-y-32 phones:col-span-12">
      <MenuTitle title="Related News" />
      <CardDetailNews2 data={data} />
    </div>
  )
}

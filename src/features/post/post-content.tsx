import { CardDetailNews } from '@/components/ui/card'
import { MenuTitle } from '@/components/ui/title'
import { convertSlugToText } from '@/libs/helpers/format-text'
import { BeritaDetailType } from '@/libs/interface'

export function PostContent({ data }: { data: BeritaDetailType[] }) {
  const searchParams = new URLSearchParams(location.search)
  const contentParams = searchParams.get('content')

  return (
    <div className="col-span-9 flex flex-col gap-y-32 phones:col-span-12">
      <MenuTitle title={convertSlugToText(contentParams)} />
      <CardDetailNews data={data} />
    </div>
  )
}

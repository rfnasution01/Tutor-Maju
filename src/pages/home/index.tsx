import { MappingBerita } from '@/features/berita'
import { HeaderNavigation } from '@/features/homepage'
import { MappingPengumuman } from '@/features/pengumuman'

export default function Home() {
  return (
    <main className="flex h-screen flex-col">
      <HeaderNavigation />
      <div className="scrollbar grid max-h-full flex-1 grid-cols-12 gap-32 overflow-y-auto px-32 py-32">
        <div className="col-span-9 phones:col-span-12">
          <MappingBerita />
        </div>
        <div className="col-span-3 phones:col-span-12">
          <MappingPengumuman />
        </div>
      </div>
    </main>
  )
}

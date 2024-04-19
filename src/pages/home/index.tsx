import { HeaderBerita, MappingBerita } from '@/features/berita'
import { HeaderPengumuman } from '@/features/pengumuman'

export default function Home() {
  return (
    <main className="scrollbar overflow-scrol grid h-full grid-cols-12 gap-x-32 px-32 pt-32">
      <div className="col-span-8 flex flex-col gap-y-32 rounded-2xl bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 p-32">
        <HeaderBerita />
        <MappingBerita />
      </div>
      <div className="col-span-4 rounded-2xl p-32">
        <HeaderPengumuman />
      </div>
    </main>
  )
}

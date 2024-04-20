import { HeaderBerita, MappingBerita } from '@/features/berita'
import {
  BestPengumuman,
  HeaderPengumuman,
  MappingPengumuman,
} from '@/features/pengumuman'
import { ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="scrollbar grid h-full grid-cols-12 gap-x-32 overflow-scroll px-32 pt-32">
      <div className="col-span-8 flex flex-col gap-y-32 rounded-2xl bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 p-32">
        <HeaderBerita />
        <MappingBerita />
      </div>
      <div className="col-span-4 flex flex-col gap-y-32 rounded-2xl p-32 ">
        <HeaderPengumuman />
        <div className="flex items-center justify-between gap-x-32">
          <p className="font-roboto text-[2.4rem] font-bold">Recomended</p>
          <div className="flex items-center gap-x-8">
            <p>View All</p>
            <span>
              <ChevronRight size={16} />
            </span>
          </div>
        </div>
        <BestPengumuman />
        <MappingPengumuman />
      </div>
    </main>
  )
}

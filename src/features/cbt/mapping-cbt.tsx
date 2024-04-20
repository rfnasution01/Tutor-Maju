import { useState } from 'react'
import { MappingPercobaan } from './mapping-percobaan'
import { PercobaanDetail } from './percobaan-detail'
import { PercobaanLangkah } from './percobaan-langkah'
import ComingSoon from '@/pages/coming-soon'
import { HomeCBT } from './home-cbt'

export function MappingCBT({ type }: { type: string }) {
  const [ujian, setUjian] = useState<string>('ujian cpns')

  return (
    <div className="grid grid-cols-12 gap-32">
      {type?.includes('home') ? (
        <div className="col-span-12">
          <HomeCBT />
        </div>
      ) : type?.includes('percobaan') ? (
        <div className="col-span-12 flex flex-col gap-y-32">
          <PercobaanLangkah />
          <div className="grid grid-cols-12 gap-x-32">
            <MappingPercobaan setUjian={setUjian} ujian={ujian} />
            <PercobaanDetail ujian={ujian} />
          </div>
        </div>
      ) : (
        <div className="col-span-12">
          <ComingSoon />
        </div>
      )}
    </div>
  )
}

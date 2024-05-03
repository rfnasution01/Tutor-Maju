import { useEffect, useState } from 'react'
import { MappingPercobaan } from './mapping-percobaan'
import { PercobaanDetail } from './percobaan-detail'
import { PercobaanLangkah } from './percobaan-langkah'
import ComingSoon from '@/pages/coming-soon'
import { HomeCBT } from './home-cbt'
import { useGetUjianQuery } from '@/store/slices/cbtAPI'
import { UjianType } from '@/libs/interface/cbtType'

export function MappingCBT({ type }: { type: string }) {
  const [ujianName, setUjianName] = useState<string>('')
  const { data } = useGetUjianQuery()
  const [ujian, setUjian] = useState<UjianType[]>([])

  useEffect(() => {
    if (data?.data) {
      setUjian(data?.data)
    }
  }, [data?.data])

  // const loading = isLoading || isFetching

  return (
    <div className="grid grid-cols-12 gap-32">
      {type?.includes('home') ? (
        <div className="col-span-12">
          <HomeCBT />
        </div>
      ) : type?.includes('ujian') ? (
        <div className="col-span-12">
          {/* <UjianHome data={ujian} loading={loading} /> */}
          <PercobaanLangkah />
          <div className="grid grid-cols-12 gap-32">
            <MappingPercobaan
              setUjianName={setUjianName}
              ujianName={ujianName}
              ujian={ujian}
            />
            <PercobaanDetail ujianName={ujianName} ujian={ujian} />
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

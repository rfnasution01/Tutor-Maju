import { UjianType } from '@/libs/interface/cbtType'
import { StatistikNilai } from './statistik-nilai'

export function PercobaanDetail({
  ujianName,
  ujian,
}: {
  ujianName: string
  ujian: UjianType[]
}) {
  return (
    <>
      {ujian
        ?.filter((item) => item?.nama_ujian?.toLowerCase().includes(ujianName))
        ?.map((item, idx) => (
          <div
            className="col-span-6 block phones:col-span-12 phones:hidden"
            key={idx}
          >
            <StatistikNilai item={item} />
          </div>
        ))}
    </>
  )
}

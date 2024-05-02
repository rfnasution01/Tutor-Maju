import { StatistikType } from '@/libs/interface'
import { Dispatch, SetStateAction } from 'react'
import { ResultStatistikNilai } from './result-statistik-nilai'

export function ResultStatistik({
  data,
  setType,
  setKategori,
  idUjian,
}: {
  data: StatistikType[]
  idUjian: string
  setType: Dispatch<SetStateAction<string>>
  setKategori: Dispatch<SetStateAction<string>>
}) {
  return (
    <div className="flex flex-col gap-y-32">
      <ResultStatistikNilai
        data={data}
        setKategori={setKategori}
        setType={setType}
        idUjian={idUjian}
      />
    </div>
  )
}

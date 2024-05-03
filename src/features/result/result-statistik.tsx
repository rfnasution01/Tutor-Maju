import { StatistikType } from '@/libs/interface'
import { Dispatch, SetStateAction } from 'react'
import { ResultStatistikNilai } from './result-statistik-nilai'
import Loading from '@/components/Loading'

export function ResultStatistik({
  data,
  setType,
  setKategori,
  idUjian,
  isLoading,
}: {
  data: StatistikType[]
  idUjian: string
  setType: Dispatch<SetStateAction<string>>
  setKategori: Dispatch<SetStateAction<string>>
  isLoading: boolean
}) {
  return (
    <div className="flex flex-col gap-y-32">
      {isLoading ? (
        <Loading />
      ) : (
        <ResultStatistikNilai
          data={data}
          setKategori={setKategori}
          setType={setType}
          idUjian={idUjian}
        />
      )}
    </div>
  )
}

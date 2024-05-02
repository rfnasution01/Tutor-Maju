import { Dispatch, SetStateAction, useState } from 'react'
import { ResultHeader } from './result-header'
import { ResultStatistik } from './result-statistik'
import { ResultPembahasan } from './result-pembahasan'
import { PembahasanType, StatistikType } from '@/libs/interface'

export function ResultHome({
  dataStatistik,
  dataPembahasan,
  idUjian,
  isLoading,
  noSoal,
  setNoSoal,
  totalSoal,
}: {
  dataStatistik: StatistikType[]
  dataPembahasan: PembahasanType[]
  idUjian: string
  isLoading: boolean
  noSoal: number
  setNoSoal: Dispatch<SetStateAction<number>>
  totalSoal: number
}) {
  const [type, setType] = useState<string>('statistik')
  const [kategori, setKategori] = useState<string>()

  return (
    <div className="flex h-full flex-col gap-y-32 px-80 py-32 text-[2rem] phones:px-32">
      <ResultHeader type={type} setType={setType} />
      {type.includes('statistik') ? (
        <ResultStatistik
          data={dataStatistik}
          setKategori={setKategori}
          setType={setType}
          idUjian={idUjian}
        />
      ) : (
        <ResultPembahasan
          data={dataPembahasan}
          kategori={kategori}
          isLoading={isLoading}
          totalSoal={totalSoal}
          noSoal={noSoal}
          setNoSoal={setNoSoal}
          kodeSoal={idUjian}
        />
      )}
    </div>
  )
}

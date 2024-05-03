import { PembahasanType, StatistikType } from '@/libs/interface'
import {
  useGetPembahasanUjianQuery,
  useGetStatistikUjianQuery,
} from '@/store/slices/cbtAPI'
import { useEffect, useState } from 'react'
import { ExamHeader } from '../exam'
import 'react-toastify/dist/ReactToastify.css'
import { ResultHome } from '../result'

export default function ResultLayout() {
  const searchParams = new URLSearchParams(location.search)
  const kodeUjian = searchParams.get('soal')
  const [dataStatistik, setDataStatistik] = useState<StatistikType[]>([])
  const [dataPembahasan, setDataPembahasan] = useState<PembahasanType[]>([])

  const noSoalParams = searchParams.get('nomor') ?? 1
  const [noSoal, setNoSoal] = useState<number>(Number(noSoalParams))
  const {
    data: dataStatistikUjian,
    isLoading: statistikLoading,
    isFetching: statistikFething,
  } = useGetStatistikUjianQuery(
    {
      id_ujian: kodeUjian,
    },
    {
      skip: kodeUjian === null || kodeUjian === undefined || kodeUjian === '',
    },
  )

  useEffect(() => {
    if (dataStatistikUjian?.data) {
      setDataStatistik(dataStatistikUjian?.data)
    }
  }, [dataStatistikUjian?.data])

  const {
    data: dataPembahasanUjian,
    isLoading: pembahasanLoading,
    isFetching: pembahasanFething,
  } = useGetPembahasanUjianQuery(
    {
      id_ujian: kodeUjian,
    },
    {
      skip: kodeUjian === null || kodeUjian === undefined || kodeUjian === '',
    },
  )

  useEffect(() => {
    if (dataPembahasanUjian?.data) {
      setDataPembahasan(dataPembahasanUjian?.data)
    }
  }, [dataPembahasanUjian?.data])

  return (
    <div className="scrollbar flex h-full max-h-screen flex-col overflow-y-auto bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      {/* --- HEader --- */}
      <ExamHeader />
      {/* --- COntent --- */}
      <ResultHome
        dataStatistik={dataStatistik}
        idUjian={kodeUjian}
        dataPembahasan={dataPembahasan}
        isLoading={
          statistikFething ||
          statistikLoading ||
          pembahasanFething ||
          pembahasanLoading
        }
        noSoal={noSoal}
        setNoSoal={setNoSoal}
        totalSoal={dataPembahasan?.length}
      />
    </div>
  )
}

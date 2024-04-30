import { LogoTitle } from '@/components/Logo'
import Time from '@/components/Time'
import { UjianType } from '@/libs/interface'
import { getBiodataPribadiSlice } from '@/store/reducer/statePribadi'
import { useGetUjianQuery } from '@/store/slices/cbtAPI'
import { User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function ExamHeader() {
  const navigate = useNavigate()
  const biodataPribadi = useSelector(getBiodataPribadiSlice)
  const searchParams = new URLSearchParams(location.search)
  const soalParams = searchParams.get('soal') ?? null

  const { data } = useGetUjianQuery()
  const [ujian, setUjian] = useState<UjianType[]>([])

  useEffect(() => {
    if (data?.data) {
      setUjian(data?.data)
    }
  }, [data?.data])

  return (
    <div className="flex flex-row items-center justify-between bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 px-32 py-12">
      <LogoTitle />
      <p className="block font-roboto text-[2.8rem] uppercase phones:hidden">
        {ujian?.find((item) => item?.id_ujian === soalParams)?.nama_ujian}
      </p>

      <div className="flex items-center gap-x-48 text-slate-700 hover:cursor-pointer">
        {/* -- Time -- */}
        <Time />
        {/* -- Profile -- */}
        <div
          className="flex items-center gap-x-4 hover:cursor-pointer"
          onClick={() => {
            navigate('/app/settings')
          }}
        >
          <span>
            <User />
          </span>
          <p className="block text-[2rem] phones:hidden">
            {biodataPribadi?.nama ?? 'John'}
          </p>
        </div>
      </div>
    </div>
  )
}

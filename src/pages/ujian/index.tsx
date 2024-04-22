import { UjianNavigation, UjianSoal } from '@/features/ujian'
import { useGetSoalUjianQuery } from '@/store/slices/cbt'

export default function Ujian() {
  const searchParams = new URLSearchParams(location.search)
  const soalParams = searchParams.get('soal')

  const { data } = useGetSoalUjianQuery(
    {
      id_ujian: soalParams,
    },
    {
      skip:
        soalParams === null || soalParams === undefined || soalParams === '',
    },
  )

  console.log({ data })

  return (
    <div className="scrollbar flex h-full max-h-screen flex-col gap-y-32 overflow-y-auto bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      {/* --- HEader --- */}
      <div className="flex flex-row justify-between bg-primary px-32 py-12">
        <img src="/img/logo.png" alt="logo" className="w-[7rem]" />
      </div>
      <div className="grid grid-cols-12 gap-32 px-128 phones:px-32">
        <div className="col-span-10 rounded-2xl bg-white p-32 shadow-lg phones:order-last phones:col-span-12">
          <UjianSoal />
        </div>
        <div className="col-span-2 rounded-2xl bg-white p-32 shadow-lg phones:col-span-12">
          <UjianNavigation />
        </div>
      </div>
    </div>
  )
}

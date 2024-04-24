import { ChevronUp } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

export function ExamSoalHeader({
  noSoal,
  totalSoal,
  setUkuranSoal,
  setIsShow,
  isShow,
}: {
  noSoal: number
  totalSoal: number
  setUkuranSoal: Dispatch<SetStateAction<string>>
  setIsShow: Dispatch<SetStateAction<boolean>>
  isShow: boolean
}) {
  return (
    <div className="flex flex-col bg-red-300">
      {/* --- No Soal --- */}
      <div className="flex items-center justify-between bg-primary px-32 py-24 text-[2rem] text-white">
        <div className="flex items-center gap-x-12">
          <p className="uppercase">Soal No </p>
          <p>
            <span className="bg-white px-8 py-4 text-primary">{noSoal}</span> /{' '}
            {totalSoal}
          </p>
        </div>
        <div className="flex items-center gap-x-32">
          <div className="flex items-center gap-x-16">
            <p
              className="text-[2rem] italic hover:cursor-pointer"
              onClick={() => {
                setUkuranSoal('sm')
              }}
            >
              Aa
            </p>
            <p
              className="text-[2.4rem] italic hover:cursor-pointer"
              onClick={() => {
                setUkuranSoal('md')
              }}
            >
              Aa
            </p>
            <p
              className="text-[2.8rem] italic hover:cursor-pointer"
              onClick={() => {
                setUkuranSoal('lg')
              }}
            >
              Aa
            </p>
          </div>
          <span
            className="hidden hover:cursor-pointer phones:block"
            onClick={() => {
              setIsShow(!isShow)
            }}
          >
            <ChevronUp />
          </span>
        </div>
      </div>
    </div>
  )
}

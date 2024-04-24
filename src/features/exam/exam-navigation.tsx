import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

export function ExamNavigation({
  totalSoal = 20,
  noSoal,
  setNoSoal,
  kodeSoal,
}: {
  kodeSoal: string
  totalSoal?: number
  noSoal: number
  setNoSoal: Dispatch<SetStateAction<number>>
}) {
  const navigate = useNavigate()
  const isOpenNow = (nomor: number) => {
    if (nomor === noSoal) {
      return true
    }
    return false
  }

  const handleSetNomorSoal = (nomor: number) => {
    navigate(`/exam?soal=${kodeSoal}&nomor=${nomor}`)
    setNoSoal(nomor)
  }

  return (
    <div className="grid grid-cols-12 gap-24">
      {Array.from({ length: totalSoal }, (_, index) => (
        <div
          className={clsx(
            'col-span-2 flex items-center justify-center rounded-lg p-12 text-[1.8rem] font-medium tracking-1.25 hover:cursor-pointer',
            {
              'bg-blue-500 text-slate-50': isOpenNow(index + 1),
            },
          )}
          key={index}
          onClick={() => {
            handleSetNomorSoal(index + 1)
          }}
        >
          {index + 1}
        </div>
      ))}
    </div>
  )
}

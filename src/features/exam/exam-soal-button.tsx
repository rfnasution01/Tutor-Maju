import { Bookmark, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

export function ExamSoalButton({
  kodeSoal,
  setNoSoal,
  noSoal,
}: {
  kodeSoal: string
  setNoSoal: Dispatch<SetStateAction<number>>
  noSoal: number
}) {
  const navigate = useNavigate()

  const handleButton = (nomor: number) => {
    navigate(`/exam?soal=${kodeSoal}&nomor=${nomor}`)
    setNoSoal(nomor)
  }

  return (
    <div className="flex items-center gap-32 text-[1.6rem] phones:flex-col phones:gap-16">
      {/* -- Sebelumnya -- */}
      <div
        onClick={() => {
          handleButton(noSoal - 1)
        }}
        className="flex items-center justify-center gap-x-8 rounded-xl bg-slate-500 px-32 py-8 text-white hover:cursor-pointer hover:bg-slate-700 phones:w-full"
      >
        <span>
          <ChevronsLeft size={16} />
        </span>
        <p>Soal Sebelumnya</p>
      </div>

      {/* -- Selanjutya -- */}
      <div
        onClick={() => {
          handleButton(noSoal + 1)
        }}
        className="flex items-center justify-center gap-x-8 rounded-xl bg-blue-500 px-32 py-8 text-white hover:cursor-pointer hover:bg-blue-700 phones:w-full"
      >
        <span>
          <ChevronsRight size={16} />
        </span>
        <p>Soal Selanjutnya</p>
      </div>

      {/* -- Ragu Ragu -- */}
      <div className="flex items-center justify-center gap-x-8 rounded-xl bg-yellow-500 px-32 py-8 text-white hover:cursor-pointer hover:bg-yellow-700 phones:w-full">
        <span>
          <Bookmark size={16} />
        </span>
        <p>Ragu Ragu</p>
      </div>
    </div>
  )
}

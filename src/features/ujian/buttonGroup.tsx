import { cekDanUpdateJawaban } from '@/libs/helpers/format-number'
import { ChevronsLeft, ChevronsRight, CircleHelp } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

export function ButtonGroup({
  pageNumber,
  selectedOption,
  setPageNumber,
  ujianId,
}: {
  pageNumber: number
  selectedOption: string
  setPageNumber: Dispatch<SetStateAction<number>>
  ujianId: string
}) {
  const navigate = useNavigate()

  return (
    <div className="flex items-center gap-x-32">
      <div
        onClick={() => {
          const jawaban = {
            number: pageNumber,
            value: selectedOption,
          }
          cekDanUpdateJawaban(jawaban)
          setPageNumber(pageNumber - 1)
          navigate(`/exam?soal=${ujianId}&number=${pageNumber - 1}`)
        }}
        className="flex items-center gap-x-8 rounded-lg bg-slate-500 px-24 py-8 text-white hover:cursor-pointer hover:bg-slate-700"
      >
        <span>
          <ChevronsLeft />
        </span>
        <p>Soal Sebelumnya</p>
      </div>
      <div className="flex items-center gap-x-8 rounded-lg bg-amber-500 px-24 py-8 text-white hover:cursor-pointer hover:bg-amber-700">
        <span>
          <CircleHelp />
        </span>
        <p>Ragu Ragu</p>
      </div>
      <div
        onClick={() => {
          const jawaban = {
            number: pageNumber,
            value: selectedOption,
          }
          cekDanUpdateJawaban(jawaban)
          setPageNumber(pageNumber + 1)
          navigate(`/exam?soal=${ujianId}&number=${pageNumber + 1}`)
        }}
        className="flex items-center gap-x-8 rounded-lg bg-blue-500 px-24 py-8 text-white hover:cursor-pointer hover:bg-blue-700"
      >
        <span>
          <ChevronsRight />
        </span>
        <p>Soal Selanjutnya</p>
      </div>
    </div>
  )
}

import { Dispatch, SetStateAction } from 'react'

export function SoalTitle({
  pageNumber,
  setUkuranFont,
}: {
  pageNumber: number
  setUkuranFont: Dispatch<SetStateAction<string>>
}) {
  return (
    <div className="flex flex-col gap-y-8 text-[2rem]">
      <div className="flex items-center gap-x-12  px-32 pt-32 uppercase">
        <p>Soal No</p>
        <span className="rounded-lg bg-blue-700 px-12 py-4 text-white">
          {Number(pageNumber)}
        </span>
      </div>
      <div className="flex items-center gap-x-16 bg-slate-200 px-32 py-12">
        <p>Ukuran Font Soal</p>
        <p
          onClick={() => setUkuranFont('sm')}
          className="text-[1.6rem] hover:cursor-pointer"
        >
          Aa
        </p>
        <p
          onClick={() => setUkuranFont('md')}
          className="text-[2rem] hover:cursor-pointer"
        >
          Aa
        </p>
        <p
          onClick={() => setUkuranFont('lg')}
          className="text-[2.4rem] hover:cursor-pointer"
        >
          Aa
        </p>
      </div>
    </div>
  )
}

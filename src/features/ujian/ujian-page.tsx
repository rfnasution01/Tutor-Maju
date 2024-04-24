import { Dispatch, SetStateAction, useState } from 'react'
import { SoalTitle } from './soal-title'
import { SoalContent } from './soal-content'
import { SoalUjianType } from '@/libs/interface'
import { UjianSoalContent } from './ujian-soal'
import { ButtonGroup } from './buttonGroup'

export function UjianSoal({
  pageNumber,
  dataSoal,
  setPageNumber,
  ujianId,
}: {
  pageNumber: number
  dataSoal: SoalUjianType[]
  setPageNumber: Dispatch<SetStateAction<number>>
  ujianId: string
}) {
  const [ukuranFont, setUkuranFont] = useState<string>('sm')
  const [singleSelected, setSingleSelected] = useState<string>(null)

  console.log(setSingleSelected)

  return (
    <div className="flex flex-col rounded-2xl bg-white">
      <SoalTitle pageNumber={pageNumber} setUkuranFont={setUkuranFont} />
      <hr className="border-2 border-slate-300 " />
      <div className="flex h-full flex-col gap-y-32 p-32">
        <UjianSoalContent />
        <ButtonGroup
          pageNumber={pageNumber}
          selectedOption={singleSelected}
          setPageNumber={setPageNumber}
          ujianId={ujianId}
        />
      </div>
      <SoalContent
        ukuranFont={ukuranFont}
        dataSoal={dataSoal}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        ujianId={ujianId}
      />
    </div>
  )
}

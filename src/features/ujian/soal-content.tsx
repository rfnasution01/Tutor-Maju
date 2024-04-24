import { ShowQuestion } from '@/libs/helpers/extractHTMLElement'
import { cekDanUpdateJawaban } from '@/libs/helpers/format-number'
import { SoalUjianType } from '@/libs/interface'
import clsx from 'clsx'
import { ChevronsLeft, ChevronsRight, CircleHelp } from 'lucide-react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function SoalContent({
  ukuranFont,
  dataSoal,
  pageNumber,
  setPageNumber,
  ujianId,
}: {
  ujianId: string
  ukuranFont: string
  dataSoal: SoalUjianType[]
  pageNumber: number
  setPageNumber: Dispatch<SetStateAction<number>>
}) {
  const navigate = useNavigate()
  const [multipleOption, setMultipleOptions] = useState<
    { value: string; isChecked: boolean }[]
  >([])
  const [checked, setChecked] = useState<boolean>(false)

  const [selectedOption, setSelectedOption] = useState<string>(null)

  useEffect(() => {
    // Mengecek apakah ada nilai dalam localStorage untuk nomor halaman yang sama
    const hasilJawaban = localStorage.getItem('hasilJawaban')
    if (hasilJawaban) {
      const jawabanArray = JSON.parse(hasilJawaban)

      const jawaban = jawabanArray.find((item) => item.number === pageNumber)
      if (jawaban) {
        // Jika jawaban ditemukan, atur nilai selectedOption
        setSelectedOption(jawaban.value)
      } else {
        // Jika jawaban tidak ditemukan, atur nilai selectedOption menjadi null
        setSelectedOption(null)
      }
    } else {
      // Jika tidak ada data di localStorage, atur nilai selectedOption menjadi null
      setSelectedOption(null)
    }
  }, [pageNumber])

  return (
    <div className="flex h-full flex-col gap-y-32 p-32">
      <div
        className={clsx('', {
          'text-[2rem]': ukuranFont?.includes('sm'),
          'text-[2.4rem]': ukuranFont?.includes('md'),
          'text-[2.8rem]': ukuranFont?.includes('lg'),
        })}
      >
        {dataSoal
          ?.filter((item) => Number(item?.number) === pageNumber)
          ?.map((item, idx) => (
            <div className="flex flex-col gap-y-12" key={idx}>
              <div dangerouslySetInnerHTML={{ __html: item?.question }} />
              {Array.from({ length: item?.options?.length }, (_, index) => (
                <div
                  className="flex items-center gap-8"
                  key={index}
                  onClick={() => {
                    if (item?.type === 'MULTIPLE_ANSWER') {
                      if (
                        !multipleOption.some(
                          (option) =>
                            option.value === item?.options?.[index]?.value,
                        )
                      ) {
                        setMultipleOptions([
                          ...multipleOption,
                          {
                            value: item?.options?.[index]?.value,
                            isChecked: true,
                          },
                        ])
                      } else {
                        const updatedOptions = multipleOption.filter(
                          (option) =>
                            option.value !== item?.options?.[index]?.value,
                        )
                        setMultipleOptions(updatedOptions)
                      }
                    } else {
                      if (
                        selectedOption === item?.options?.[index]?.value &&
                        checked
                      ) {
                        setSelectedOption(null)
                        setChecked(false)
                      } else {
                        setSelectedOption(item?.options?.[index]?.value)
                        setChecked(true)
                      }
                    }
                  }}
                >
                  <div className="flex items-center gap-x-8 hover:cursor-pointer">
                    <div>
                      <div
                        key={index}
                        className={clsx(
                          'flex items-center justify-center rounded-full border border-black',
                          {
                            'border-transparent bg-slate-500 text-white':
                              (item?.options.some(
                                (list) => list?.value === selectedOption,
                              ) &&
                                checked) ||
                              multipleOption.some(
                                (option) =>
                                  option.value ===
                                  item?.options?.[index]?.value,
                              ),

                            'h-[2rem] w-[2rem] text-[1.2rem] ':
                              ukuranFont.includes('sm'),
                            'h-[3rem] w-[3rem] text-[1.6rem]':
                              ukuranFont.includes('md'),
                            'h-[4rem] w-[4rem] text-[2rem]':
                              ukuranFont.includes('lg'),
                          },
                        )}
                        dangerouslySetInnerHTML={{ __html: `&#${index + 65}` }}
                      />
                    </div>
                    <div>
                      <ShowQuestion htmlResponse={item?.options?.[0]?.label} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
      {/* --- Button Group --- */}
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
    </div>
  )
}

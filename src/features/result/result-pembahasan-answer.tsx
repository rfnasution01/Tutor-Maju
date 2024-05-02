import { PembahasanType } from '@/libs/interface'
import clsx from 'clsx'
import { Check, X } from 'lucide-react'

export function ResultPembahasanAnswer({
  data,
  noSoal,
  ukuranSoal,
}: {
  data: PembahasanType[]
  noSoal: number
  ukuranSoal: string
}) {
  const pilihanNow = data?.find(
    (item) => Number(item?.urutan) == noSoal,
  )?.pilihan

  const pilihan = JSON.parse(pilihanNow)

  const typeNow = data?.find((item) => Number(item?.urutan) == noSoal)?.type

  const jawabanNow = data?.find(
    (item) => Number(item?.urutan) == noSoal,
  )?.jawaban

  // Periksa apakah jawabanNow adalah array
  const isMultipleAnswer = Array.isArray(jawabanNow)

  return (
    <div className="flex flex-col gap-y-12">
      {pilihan
        ?.sort((a, b) => Number(a?.urutan) - Number(b?.urutan))
        .map((item, idx) => (
          <div
            className={clsx(
              'flex items-center gap-12 rounded-lg border border-slate-300 p-16 hover:cursor-pointer hover:bg-emerald-500 hover:text-white',
              {
                'border-transparent bg-emerald-500 text-white hover:bg-emerald-700':
                  item?.id?.includes(jawabanNow) && Number(item?.skor) > 0,
              },
              {
                'border-transparent bg-red-500 text-white hover:bg-emerald-700':
                  item?.id?.includes(jawabanNow) && Number(item?.skor) <= 0,
              },
              {
                'border-transparent bg-emerald-500 text-white hover:bg-emerald-700':
                  typeNow === 'MULTIPLE_ANSWER' &&
                  isMultipleAnswer &&
                  jawabanNow?.some(
                    (list) => list === item?.id && item?.skor > 0,
                  ),
              },
              {
                'border-transparent bg-red-500 text-white hover:bg-emerald-700':
                  typeNow === 'MULTIPLE_ANSWER' &&
                  isMultipleAnswer &&
                  jawabanNow?.some(
                    (list) => list === item?.id && item?.skor <= 0,
                  ),
              },
            )}
            key={idx}
          >
            <div className="">
              <div
                className={clsx(
                  'flex items-center justify-center rounded-full phones:rounded-full',
                  {
                    'h-[2.4rem] w-[2.4rem]': ukuranSoal?.includes('sm'),
                    'h-[2.8rem] w-[2.8rem]': ukuranSoal?.includes('md'),
                    'h-[3.2rem] w-[3.2rem]': ukuranSoal?.includes('lg'),
                    'bg-red-500 text-white':
                      !item?.id?.includes(jawabanNow) && Number(item.skor) <= 0,
                    'bg-green-500 text-white':
                      !item?.id?.includes(jawabanNow) && Number(item.skor) > 0,
                    'bg-white text-blue-500':
                      (item?.id?.includes(jawabanNow) &&
                        Number(item?.skor) <= 0) ||
                      (typeNow === 'MULTIPLE_ANSWER' &&
                        isMultipleAnswer &&
                        jawabanNow?.some(
                          (list) => list === item?.id && item?.skor <= 0,
                        )),
                    'bg-white text-green-500':
                      (item?.id?.includes(jawabanNow) &&
                        Number(item?.skor) <= 0) ||
                      (typeNow === 'MULTIPLE_ANSWER' &&
                        isMultipleAnswer &&
                        jawabanNow?.some(
                          (list) => list === item?.id && item?.skor > 0,
                        )),
                  },
                )}
              >
                {Number(item?.skor) > 0 ? <Check size={14} /> : <X size={14} />}
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: item?.pilihan }}
              className="flex-1"
            />
            <div className="rounded-2xl bg-slate-500 px-32 py-12 text-white">
              Skor: {Number(item?.skor)?.toFixed()}
            </div>
          </div>
        ))}
    </div>
  )
}

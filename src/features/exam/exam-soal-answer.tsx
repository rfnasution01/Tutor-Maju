import { SoalUjianOptionsType } from '@/libs/interface'
import clsx from 'clsx'

export function ExamSoalAnswer({
  optionsSoal,
  typeSoal,
  ukuranSoal,
}: {
  optionsSoal: SoalUjianOptionsType[]
  typeSoal: string
  ukuranSoal: string
}) {
  console.log(typeSoal)

  return (
    <div className="flex flex-col gap-y-12">
      {optionsSoal?.map((item, idx) => (
        <div
          className={'flex items-center gap-12 hover:cursor-pointer'}
          key={idx}
        >
          <div
            className={clsx('border-2', {
              'h-[1.6rem] w-[1.6rem]': ukuranSoal.includes('sm'),
              'h-[2rem] w-[2rem]': ukuranSoal.includes('md'),
              'h-[2.4rem] w-[2.4rem]': ukuranSoal.includes('lg'),
            })}
          />
          <div dangerouslySetInnerHTML={{ __html: item?.label }} />
        </div>
      ))}
    </div>
  )
}

import { PembahasanType } from '@/libs/interface'
import clsx from 'clsx'
import { Dispatch, SetStateAction, useState } from 'react'
import { ResultNoSoal } from './result-nosoal'
import { ExamNoSoalHeader } from './result-nosoal-header'
import { ExamPembahasanHeader } from './result-pembahasan-header'
import { ExamSoalQuestion } from '../exam'
import { ResultSoalButton } from './result-pembahasan-button'
import { ResultPembahasanAnswer } from './result-pembahasan-answer'
import { ResultPembahasanDetail } from './result-pembahasan-detail'

export function ResultPembahasan({
  data,
  kategori,
  noSoal,
  setNoSoal,
  kodeSoal,
  totalSoal,
  setUkuranSoal,
  ukuranSoal,
}: {
  data: PembahasanType[]
  kategori: string
  totalSoal: number
  noSoal: number
  setNoSoal: Dispatch<SetStateAction<number>>
  kodeSoal: string
  setUkuranSoal: Dispatch<SetStateAction<string>>
  ukuranSoal: string
}) {
  const [isShow, setIsShow] = useState<boolean>(true)
  const [isShowSoal, setIsShowSoal] = useState<boolean>(true)
  const [isShowNav, setIsShowNav] = useState<boolean>(true)

  const soalNow = data?.find(
    (item) => Number(item?.urutan) == noSoal,
  )?.pertanyaan

  return (
    <div className="scrollbar h-full flex-1 overflow-y-auto">
      <div className="scrollbar grid h-full grid-cols-12 gap-32 overflow-y-auto">
        {/* ---- Soal ---- */}
        <div
          className={clsx(
            'scrollbar flex h-full flex-col overflow-y-auto rounded-2xl phones:col-span-12',
            {
              'col-span-9': isShow,
              'col-span-11': !isShow,
            },
          )}
        >
          <ExamPembahasanHeader
            noSoal={noSoal}
            totalSoal={data?.length}
            setUkuranSoal={setUkuranSoal}
            isShow={isShowSoal}
            setIsShow={setIsShowSoal}
            data={data}
          />
          <div className="scrollbar h-full flex-1 overflow-y-auto">
            {isShowSoal && (
              <div
                className={clsx('flex flex-col gap-y-24 bg-white p-32', {
                  'text-[2rem]': ukuranSoal?.includes('sm'),
                  'text-[2.4rem]': ukuranSoal?.includes('md'),
                  'text-[2.8rem]': ukuranSoal?.includes('lg'),
                })}
                style={{
                  borderBottomLeftRadius: '1rem',
                  borderBottomRightRadius: '1rem',
                }}
              >
                <ExamSoalQuestion question={soalNow} />
                <ResultPembahasanAnswer
                  data={data}
                  noSoal={noSoal}
                  ukuranSoal={ukuranSoal}
                />

                <ResultPembahasanDetail data={data} noSoal={noSoal} />
                <ResultSoalButton
                  noSoal={noSoal}
                  kodeSoal={kodeSoal}
                  setNoSoal={setNoSoal}
                  totalSoal={data?.length}
                  kategori={kategori}
                />
              </div>
            )}
          </div>
        </div>
        {/* ---- Navigasi ---- */}
        <div
          className={clsx(
            'scrollbar h-full overflow-y-auto rounded-2xl phones:col-span-12',
            {
              'col-span-3': isShow,
              'col-span-1': !isShow,
            },
          )}
        >
          <div className="flex h-full flex-col">
            <ExamNoSoalHeader
              setIsShowNav={setIsShowNav}
              isShowNav={isShowNav}
              isShow={isShow}
              setIsShow={setIsShow}
            />
            {isShowNav && (
              <div className="scrollbar h-full flex-1 overflow-y-auto">
                {isShow ? (
                  <div
                    className="flex h-full flex-col gap-y-32 bg-white p-32"
                    style={{
                      borderBottomLeftRadius: '1rem',
                      borderBottomRightRadius: '1rem',
                    }}
                  >
                    <div className="scrollbar h-full flex-1 overflow-y-auto">
                      <ResultNoSoal
                        kodeSoal={kodeSoal}
                        totalSoal={totalSoal}
                        noSoal={noSoal}
                        kategori={kategori}
                        setNoSoal={setNoSoal}
                        data={data}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => setIsShow(true)}
                    className="flex h-full items-center justify-center bg-white hover:cursor-pointer"
                  >
                    <p
                      className="text-[2.4rem] uppercase tracking-6"
                      style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                      }}
                    >
                      Tampilkan Jawaban Anda
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

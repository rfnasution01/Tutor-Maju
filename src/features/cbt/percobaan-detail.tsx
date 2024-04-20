import { Button } from '@/components/Button'
import { DataPercobaan } from '@/libs/consts/dummy/data-percobaan'
import clsx from 'clsx'
import { Award, Trophy } from 'lucide-react'

export function PercobaanDetail({ ujian }: { ujian: string }) {
  return (
    <>
      {DataPercobaan.filter((item) =>
        item?.title.toLowerCase().includes(ujian),
      ).map((item, idx) => (
        <div
          className="col-span-6 flex flex-col gap-y-12 bg-white p-24"
          key={idx}
        >
          <p className="text-[2rem] font-semibold">Statistik Nilai</p>
          <div className="mb-24 grid grid-cols-12 gap-16">
            <div className="col-span-5 flex flex-col gap-y-12 rounded-2xl bg-slate-50 p-12">
              <div className="flex items-center gap-x-12 text-[1.2rem]">
                {item?.tag.map((data, id) => (
                  <div
                    className={clsx('rounded-full px-16 py-4', {
                      'bg-red-300': data.includes('Premium'),
                      'bg-yellow-300': data.includes('Free'),
                      'bg-slate-300': data.includes('Belum Dikerjakan'),
                      'bg-emerald-300': data.includes('Sudah Dikerjakan'),
                    })}
                    key={id}
                  >
                    {data}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-y-8">
                <p className="font-bold">{item?.title}</p>
                <p className="text-[1.2rem] font-light text-slate-400">
                  {item?.soal} Soal
                </p>
              </div>
              {!item?.skor && (
                <Button
                  variant="solid"
                  classes="text-[1.2rem]"
                  bgColor="bg-primary"
                  textColor="text-white"
                  child="Kerjakan Soal"
                  rounded="rounded-md"
                />
              )}
            </div>
            {item?.skor && (
              <div className="col-span-3 flex flex-col items-center justify-center gap-y-12 rounded-2xl bg-slate-50 p-12">
                <span>
                  <Award size={40} />
                </span>
                <p className="font-medium">
                  Nilai{' '}
                  <span className="font-bold text-primary">
                    {item?.skor} /{' '}
                  </span>
                  {item?.maxSkor}
                </p>
              </div>
            )}
            {item?.skor && (
              <div className="col-span-4 flex flex-col items-center justify-center gap-y-12 rounded-2xl bg-slate-50 p-12">
                <span>
                  <Trophy size={40} />
                </span>
                <p className="font-medium">
                  Peringkat{' '}
                  <span className="font-bold text-primary">
                    {item?.peringkat} /{' '}
                  </span>
                  {item?.totalPeserta}
                </p>
              </div>
            )}
          </div>

          {item?.skor && (
            <div className="grid grid-cols-12 gap-16">
              <div className="col-span-6">
                <p className="mb-8 font-semibold">Total Nilai</p>
                {item?.nilai.map((data, id) => (
                  <div
                    className="col-span-6 gap-y-12 rounded-2xl border-b p-12"
                    key={id}
                  >
                    {data?.title}:{' '}
                    <span className="font-bold text-primary">{data?.true}</span>
                    /{data?.total}
                  </div>
                ))}
              </div>
              <div className="col-span-6 flex flex-col gap-y-12">
                <div className="flex flex-col items-center">
                  <div
                    className={clsx(
                      'flex h-80 w-80 items-center justify-center rounded-full border-8',
                      {
                        'border-emerald-300': Number(item?.skor) > 300,
                        'border-rose-300': Number(item?.skor) <= 300,
                      },
                    )}
                  >
                    {item?.skor}
                  </div>
                </div>
                <div className="text-center">
                  {Number(item?.skor) > 300 ? (
                    <div className="flex flex-col gap-y-4">
                      <p>Congratulation!</p>
                      <p> Your score passed the passsing grade</p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-y-4">
                      <p>Unfortunely!</p>
                      <p> Your score below the passsing grade</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  )
}

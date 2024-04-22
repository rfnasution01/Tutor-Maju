import { UjianType } from '@/libs/interface'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { Award, Trophy } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function StatistikNilai({
  item,
  isMobile,
}: {
  item: UjianType
  isMobile?: boolean
}) {
  const navigate = useNavigate()

  return (
    <div
      className={clsx('flex flex-col gap-y-12', {
        'p-0': isMobile,
        'bg-white p-24': !isMobile,
      })}
    >
      <p className="block text-[2rem] font-semibold phones:hidden">
        Statistik Nilai
      </p>
      <div
        className={clsx('grid grid-cols-12 gap-16', {
          'mb-24': item?.skor !== 'Belum Mengerjakan Ujian',
        })}
      >
        {/* --- Card Title --- */}
        <div className="col-span-5 flex flex-col gap-y-12 rounded-2xl bg-slate-50 p-12 phones:col-span-12">
          <div className="flex items-center gap-x-12 text-[1.2rem]">
            <div className={'rounded-full bg-slate-300 px-16 py-4'}>
              {item?.skor === 'Belum Mengerjakan Ujian'
                ? 'Belum Dikerjakan'
                : 'Sudah Dikerjakan'}
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <p className="font-bold">{item?.nama_ujian}</p>
            <p className="text-[1.2rem] font-light text-slate-400">
              {item?.jumlah_soal ?? 120} Soal
            </p>
            <p className="text-[1.2rem] font-light text-slate-400">
              {dayjs(item?.tanggal_mulai).format('DD MMMM YYYY')}
            </p>
            <p className="text-[1.2rem] font-light text-slate-400">
              {dayjs(item?.tanggal_mulai).format('hh:mm')} -
              {dayjs(item?.tanggal_akhir).format('hh:mm')}
            </p>
          </div>
          {typeof item?.skor !== 'number' && (
            <div
              className="rounded-lg border border-transparent bg-primary py-12 text-center text-[1.4rem] text-white hover:cursor-pointer hover:border-primary hover:bg-transparent hover:text-primary phones:text-[1.6rem]"
              onClick={() => {
                navigate(`/ujian?soal=${item?.id_ujian}`)
              }}
            >
              Kerjakan Soal
            </div>
          )}
        </div>
        {typeof item?.skor === 'number' && (
          <div className="col-span-3 flex flex-col items-center justify-center gap-y-12 rounded-2xl bg-slate-50 p-12">
            <span>
              <Award size={40} />
            </span>
            <p className="font-medium">
              Nilai{' '}
              <span className="font-bold text-primary">{item?.skor} / </span>
              {item?.max_skor}
            </p>
          </div>
        )}
        {typeof item?.skor === 'number' && (
          <div className="col-span-4 flex flex-col items-center justify-center gap-y-12 rounded-2xl bg-slate-50 p-12">
            <span>
              <Trophy size={40} />
            </span>
            <p className="font-medium">
              Peringkat{' '}
              <span className="font-bold text-primary">
                {item?.peringkat} /{' '}
              </span>
              {item?.total_peserta}
            </p>
          </div>
        )}
      </div>

      {typeof item?.skor === 'number' && (
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-6">
            <p className="mb-8 font-semibold">Total Nilai</p>
            {item?.nilai?.map((data, id) => (
              <div
                className="col-span-6 gap-y-12 rounded-2xl border-b p-12"
                key={id}
              >
                {data?.title}:{' '}
                <span className="font-bold text-primary">{data?.true}</span>/
                {data?.total}
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
  )
}

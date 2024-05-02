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

  const handleStartExam = (item) => {
    // Cek apakah mulaiUjian sudah ada di local storage
    const existingData = localStorage.getItem('mulaiujian')
    let startTime = null

    // Jika sudah ada data, gunakan startTime dari data yang sudah ada
    if (existingData) {
      const existingStartTime = JSON.parse(existingData).startTime
      if (existingStartTime) {
        startTime = existingStartTime
      }
    } else {
      // Jika belum ada data, buat startTime baru
      startTime = new Date().toISOString()
      const duration = item?.waktu_ujian

      const dataToSave = {
        startTime,
        duration,
      }

      localStorage.setItem('mulaiujian', JSON.stringify(dataToSave))
    }
    navigate(`/exam?soal=${item?.id_ujian}`)
  }

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
        <div className="col-span-6 flex flex-col gap-y-12 rounded-2xl bg-slate-50 p-12 phones:col-span-12">
          <div className="flex items-center gap-x-12 text-[1.2rem]">
            <div
              className={clsx('rounded-full px-16 py-4', {
                'bg-slate-300 ': item?.status === 0,
                'bg-green-700 text-white': item?.status === 1,
              })}
            >
              {item?.skor === 'Belum Mengerjakan Ujian'
                ? 'Belum Dikerjakan'
                : 'Sudah Dikerjakan'}
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <p className="font-bold">{item?.nama_ujian}</p>
            <p className="text-[1.4rem] font-light text-slate-400">
              {item?.jumlah_soal ?? 120} Soal
            </p>
            <p className="text-[1.4rem] font-light text-slate-400">
              {dayjs(item?.tanggal_mulai).format('DD MMMM YYYY')}
            </p>
            <p className="text-[1.4rem] font-light text-slate-400">
              {dayjs(item?.tanggal_mulai).format('hh:mm')} -
              {dayjs(item?.tanggal_akhir).format('hh:mm')}
            </p>
          </div>
          {item?.status === 0 ? (
            <div
              className="rounded-lg border border-transparent bg-primary py-12 text-center text-[1.4rem] text-white hover:cursor-pointer hover:border-primary hover:bg-transparent hover:text-primary phones:text-[1.6rem]"
              onClick={() => {
                handleStartExam(item)
              }}
            >
              Kerjakan Soal
            </div>
          ) : (
            <div
              className="rounded-lg border border-transparent bg-primary py-12 text-center text-[1.4rem] text-white hover:cursor-pointer hover:border-primary hover:bg-transparent hover:text-primary phones:text-[1.6rem]"
              onClick={() => {
                navigate(`/result?soal=${item?.id_ujian}`)
              }}
            >
              Lihat Hasil
            </div>
          )}
        </div>
        {/* Skor  */}
        {item?.status === 1 && (
          <div className="col-span-3 flex flex-col items-center justify-center gap-y-12 rounded-2xl bg-slate-50 p-12">
            <span>
              <Award size={40} />
            </span>
            <p className="font-medium">
              Skor: <span className="font-bold text-primary">{item?.skor}</span>
            </p>
          </div>
        )}
        {/* Peringkat */}
        {item?.status === 1 && (
          <div className="col-span-3 flex flex-col items-center justify-center gap-y-12 rounded-2xl bg-slate-50 p-12">
            <span>
              <Trophy size={40} />
            </span>
            <p className="font-medium">
              Peringkat{' '}
              <span className="font-bold text-primary">
                {item?.peringkat ?? '-'}
              </span>
            </p>
          </div>
        )}
      </div>

      {item?.status === 1 && (
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-6">
            <p className="mb-8 font-semibold">Deskripsi</p>
            <div className="col-span-6 gap-y-12 rounded-2xl border-b p-12">
              Soal Dijawab:{' '}
              <span className="font-bold text-primary">{item?.dijawab}</span>/
              {item?.jumlah_soal}
            </div>
            <div className="col-span-6 gap-y-12 rounded-2xl border-b p-12">
              Soal Tidak Dijawab:{' '}
              <span className="font-bold text-primary">
                {item?.tidak_dijawab}
              </span>
              /{item?.jumlah_soal}
            </div>
            <div className="col-span-6 gap-y-12 rounded-2xl border-b p-12">
              Soal Benar:{' '}
              <span className="font-bold text-primary">{item?.benar}</span>/
              {item?.jumlah_soal}
            </div>
            <div className="col-span-6 gap-y-12 rounded-2xl border-b p-12">
              Soal Salah:{' '}
              <span className="font-bold text-primary">{item?.salah}</span>/
              {item?.jumlah_soal}
            </div>
          </div>
          <div className="col-span-6 flex flex-col items-center justify-center gap-y-12">
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
              {item?.status_lulus ? (
                <div className="flex flex-col gap-y-4">
                  <p>Selamat!</p>
                  <p>Skor anda melewati passsing grade</p>
                </div>
              ) : (
                <div className="flex flex-col gap-y-4">
                  <p>Sayang sekali!</p>
                  <p>Skor anda dibawah passsing grade</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

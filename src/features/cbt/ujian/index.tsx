import { UjianType } from '@/libs/interface'
import { useGetUjianQuery } from '@/store/slices/cbtAPI'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { List, Timer } from 'lucide-react'
import { useEffect, useState } from 'react'

export function CBTUjian() {
  //   const [ujianName, setUjianName] = useState<string>('')
  const { data, isLoading, isFetching } = useGetUjianQuery()
  const [ujian, setUjian] = useState<UjianType[]>([])
  const loading = isLoading || isFetching

  useEffect(() => {
    if (data?.data) {
      setUjian(data?.data)
    }
  }, [data?.data])

  const isTigaHariLagi = (tanggal) => {
    const today = dayjs()
    const countTanggal = dayjs(tanggal)
    const selisihHari = countTanggal.diff(today, 'day')
    return selisihHari
  }
  return (
    <>
      {!loading ? (
        <div className="w-1/4 rounded-2xl bg-white shadow hover:cursor-pointer hover:shadow-md phones:col-span-6">
          <div className="flex flex-col">
            <p
              className={clsx(
                'bg-green-700 px-24 py-16 text-[1.6rem] font-medium text-white',
              )}
              style={{
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
              }}
            >
              <div className="w-6/12 rounded-full bg-slate-300" />
            </p>
            {/* <div className="flex flex-col gap-y-8 px-24 py-16">
              <div className="flex text-[1.4rem]">
                {item?.status === 0 ? (
                  <div className="rounded-full bg-slate-500 px-24 py-8 text-white">
                    Belum dikerjakan
                  </div>
                ) : (
                  <div className="rounded-full bg-green-600 px-24 py-8 text-white">
                    Sudah Dikerjakan
                  </div>
                )}
              </div>
              <p className="text-[2rem] font-medium">{item?.nama_ujian}</p>

              <div className="flex items-center gap-x-16">
                <div className="flex items-center gap-x-4">
                  <Timer size={16} />
                  <p>{item?.waktu_ujian} Menit</p>
                </div>
                <div className="flex items-center gap-x-4">
                  <List size={16} />
                  <p>{item?.jumlah_soal} Soal</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      ) : ujian?.length === 0 ? (
        <div className="">Belum ada ujian</div>
      ) : (
        <div className="grid grid-cols-12 gap-32">
          {ujian?.map((item, idx) => (
            <div
              className="col-span-4 rounded-2xl bg-white shadow hover:cursor-pointer hover:shadow-md phones:col-span-6"
              key={idx}
            >
              <div className="flex flex-col">
                <p
                  className={clsx(
                    'px-24 py-16 text-[1.6rem] font-medium text-white',
                    {
                      'bg-red-700 ': !(isTigaHariLagi(item?.tanggal_mulai) > 3),
                      'bg-green-700': isTigaHariLagi(item?.tanggal_mulai) > 3,
                    },
                  )}
                  style={{
                    borderTopLeftRadius: '1rem',
                    borderTopRightRadius: '1rem',
                  }}
                >
                  {dayjs(item?.tanggal_mulai)
                    .locale('id')
                    .format('DD MMMM YYYY')}
                </p>
                <div className="flex flex-col gap-y-8 px-24 py-16">
                  <div className="flex text-[1.4rem]">
                    {item?.status === 0 ? (
                      <div className="rounded-full bg-slate-500 px-24 py-8 text-white">
                        Belum dikerjakan
                      </div>
                    ) : (
                      <div className="rounded-full bg-green-600 px-24 py-8 text-white">
                        Sudah Dikerjakan
                      </div>
                    )}
                  </div>
                  <p className="text-[2rem] font-medium">{item?.nama_ujian}</p>

                  <div className="flex items-center gap-x-16">
                    <div className="flex items-center gap-x-4">
                      <Timer size={16} />
                      <p>{item?.waktu_ujian} Menit</p>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <List size={16} />
                      <p>{item?.jumlah_soal} Soal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

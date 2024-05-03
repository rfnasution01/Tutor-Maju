import Loading from '@/components/Loading'
import { UjianType } from '@/libs/interface'
import DataNotFound from '@/pages/data-not-found'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { List, Timer } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function UjianHome({
  data,
  loading,
}: {
  data: UjianType[]
  loading?: boolean
}) {
  const navigate = useNavigate()
  return (
    <div className="grid grid-cols-12 gap-32 ">
      {loading ? (
        <div className="col-span-12">
          <Loading />
        </div>
      ) : data?.length === 0 ? (
        <div className="col-span-12">
          <DataNotFound />
        </div>
      ) : (
        data?.map((item, idx) => (
          <div
            className="col-span-4 rounded-2xl bg-white shadow hover:cursor-pointer hover:shadow-md"
            key={idx}
            onClick={() => {
              navigate(`/ujian?page=mulai-ujian&soal=${item?.id_ujian}`)
            }}
          >
            <div
              className="bg-primary px-32 py-16 text-[2rem] text-white"
              style={{
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
              }}
            >
              {dayjs(item?.tanggal_mulai).locale('id').format('DD MMMM YYYY')}
            </div>
            <div className="flex flex-col gap-y-12 px-32 pb-32 pt-16">
              {/* --- Tag --- */}
              <div className="flex items-center gap-x-8">
                <p
                  className={clsx(
                    'border-l-4 p-8 text-[1.4rem]',
                    {
                      'border-red-500 bg-red-100 bg-opacity-90':
                        item?.status === 0,
                    },
                    {
                      'border-emerald-500 bg-emerald-100 bg-opacity-40':
                        item?.status === 1,
                    },
                  )}
                >
                  {item?.status === 0 ? 'Belum dikerjakan' : 'Sudah Dikerjakan'}
                </p>
              </div>
              {/* --- Title --- */}
              <p className="font-roboto text-[2.4rem]">{item?.nama_ujian}</p>
              {/* --- Desc --- */}
              <div className="flex items-center gap-x-16">
                <div className="flex items-center justify-center gap-x-4">
                  <span className="flex items-center justify-center">
                    <Timer size={20} />
                  </span>
                  <p>{item?.waktu_ujian} Menit</p>
                </div>
                <div className="flex items-center justify-center gap-x-4">
                  <span className="flex items-center justify-center">
                    <List size={20} />
                  </span>
                  <p>{item?.jumlah_soal} Soal</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

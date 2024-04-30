import { Button } from '@/components/Button'
import { UjianType } from '@/libs/interface/cbtType'
import clsx from 'clsx'
import { List, Play, RefreshCcw, Timer } from 'lucide-react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { StatistikNilai } from './statistik-nilai'
import { useGetResetUjianQuery } from '@/store/slices/cbtAPI'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function MappingPercobaan({
  ujianName,
  setUjianName,
  ujian,
}: {
  ujianName: string
  setUjianName: Dispatch<SetStateAction<string>>
  ujian: UjianType[]
}) {
  const [idUjian, setIdUjian] = useState<string>()
  const [isReset, setIsReset] = useState<boolean>(false)
  const { data, isSuccess, isError, error } = useGetResetUjianQuery(
    { id_ujian: idUjian },
    {
      skip:
        !isReset || idUjian === null || idUjian === undefined || idUjian === '',
    },
  )

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Ujian berhasil direset!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      const errorMsg = error as {
        data?: {
          message?: string
        }
      }

      toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    }
  }, [isError, error])

  console.log(data)

  return (
    <div className="col-span-6 flex flex-col gap-y-12 rounded-2xl bg-white p-24 phones:col-span-12">
      <p className="text-[2rem] font-semibold">Daptar Ujian Percobaan</p>
      <div className="flex flex-col gap-y-12">
        {ujian.map((item, idx) => (
          <div className="flex flex-col gap-y-12" key={idx}>
            <div
              className={clsx(
                'flex items-center gap-x-24 border p-24 hover:cursor-pointer hover:shadow-md',
                {
                  'border-transparent bg-purple-200 hover:shadow-none':
                    item?.nama_ujian?.toLowerCase()?.includes(ujianName),
                },
              )}
            >
              <div className="flex flex-1 flex-col gap-y-8">
                <h5 className="text-[1.8rem] font-bold">{item?.nama_ujian}</h5>
                <div className="flex items-center gap-x-16">
                  <div className="flex items-center gap-x-4">
                    <span>
                      <Timer size={12} />
                    </span>
                    <p className="text-[1.4rem] font-light">
                      {item?.waktu_ujian}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <span>
                      <List size={12} />
                    </span>
                    <p className="text-[1.4rem] font-light">
                      {item?.jumlah_soal ?? 100} Soal
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-16">
                <Button
                  variant="solid"
                  bgColor="bg-primary"
                  textColor="text-white"
                  rounded="rounded-xl"
                  child={
                    <div
                      className="flex items-center gap-x-12 text-[1.6rem]"
                      onClick={() => {
                        setIsReset(true)
                        setIdUjian(item?.id_ujian)
                      }}
                    >
                      Reset
                      <span>
                        <RefreshCcw size={14} />
                      </span>
                    </div>
                  }
                />
                <Button
                  variant="outlined"
                  borderColor="border-primary"
                  textColor="text-primary"
                  rounded="rounded-xl"
                  child={
                    <div
                      className="flex items-center gap-x-12 text-[1.6rem] "
                      onClick={() => {
                        setUjianName(item?.nama_ujian.toLowerCase())
                      }}
                    >
                      Mulai
                      <span>
                        <Play size={14} />
                      </span>
                    </div>
                  }
                />
              </div>
            </div>
            {ujianName !== '' && (
              <div className="hidden phones:block">
                {item?.nama_ujian?.toLowerCase()?.includes(ujianName) && (
                  <StatistikNilai item={item} isMobile />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  )
}

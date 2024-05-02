import { StatistikType } from '@/libs/interface'
import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

export function ResultStatistikNilai({
  data,
  idUjian,
  setType,
  setKategori,
}: {
  data: StatistikType[]
  idUjian: string
  setType: Dispatch<SetStateAction<string>>
  setKategori: Dispatch<SetStateAction<string>>
}) {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-y-24">
      <p className="text-[2rem] font-bold">Nilai</p>
      <div className="grid grid-cols-12 gap-32">
        {data?.map((item, idx) => (
          <div
            className="col-span-3 rounded-2xl border-white bg-white p-32 shadow phones:col-span-12"
            key={idx}
          >
            <div className="flex flex-col gap-y-12">
              <p className="text-[2rem] font-bold">{item?.nama_kategori}</p>
              <p>
                Dijawab: <span className="text-primary">{item?.dijawab}</span> /{' '}
                {item?.jumlah_soal}
              </p>
              <p>Benar: {item?.benar}</p>
              <p>Salah: {item?.salah}</p>
              <button
                type="button"
                className="rounded-2xl bg-primary py-16 text-white"
                onClick={() => {
                  setType('pembahasan')
                  setKategori(item?.id_kategori)
                  navigate(
                    `/result?soal=${idUjian}&kategori=${item?.id_kategori}`,
                  )
                }}
              >
                Pembahasan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

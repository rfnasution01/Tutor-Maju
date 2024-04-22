import { convertToSlug } from '@/libs/helpers/format-text'
import TimeSinceUploaded from '@/libs/helpers/timeUploaded'
import { BeritaType } from '@/libs/interface'
import { useGetPengumumanQuery } from '@/store/slices/pengumunanAPI'
import { Flame } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function MappingPengumuman() {
  const navigate = useNavigate()
  const pageSize = 3
  const pageNumber = 1
  const [pengumuman, setPengumuman] = useState<BeritaType[]>()

  const { data: dataPengumuman } = useGetPengumumanQuery({
    page_size: pageSize,
    page_number: pageNumber,
    search: '',
  })

  useEffect(() => {
    if (dataPengumuman?.data) {
      setPengumuman(dataPengumuman?.data)
    }
  }, [dataPengumuman?.data])

  return (
    <div className="flex h-full flex-col gap-y-32">
      <div className="flex items-center gap-x-12 text-nowrap font-roboto text-[3rem]">
        <p>Trending</p>
        <span>
          <Flame size={24} color="red" />
        </span>
      </div>

      {/* Item  */}
      {pengumuman?.slice(0, 1).map((item, idx) => (
        <div
          className="transform-gpu border bg-white p-32 shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
          key={idx}
          onClick={() => {
            navigate(`/post?type=pengumuman&content=${convertToSlug(item.seo)}`)
          }}
        >
          <div className="flex flex-row items-center gap-x-32">
            <div className="flex-1">
              <div className="flex flex-col gap-y-16">
                {/* --- Tag --- */}
                <div className="flex items-center gap-x-24">
                  <p className="border-l-4 border-primary bg-primary-shade-200 bg-opacity-20 px-4 py-2">
                    {item?.kategori}
                  </p>
                  <div className="italic text-slate-500">
                    <TimeSinceUploaded uploadTime={item?.tanggal} />
                  </div>
                </div>
                {/* --- Title --- */}
                <p className="font-roboto text-[2rem]">{item?.judul}</p>
              </div>
            </div>
            <img
              src={item?.photo?.gambar ?? '/img/logo.png'}
              alt="logo"
              className="h-[9rem] w-[9rem] rounded-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

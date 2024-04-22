import { convertToSlug } from '@/libs/helpers/format-text'
import TimeSinceUploaded from '@/libs/helpers/timeUploaded'
import { BeritaDetailType } from '@/libs/interface'
import { useNavigate } from 'react-router-dom'

export function PostRelated({ data }: { data: BeritaDetailType[] }) {
  const navigate = useNavigate()

  return (
    <div className="col-span-3 flex flex-col gap-y-32 phones:col-span-12">
      <p className="font-roboto text-[3rem]">Related News</p>
      <div className="flex flex-col gap-32">
        {data?.map((item, idx) => (
          <div
            className="transform-gpu border bg-white p-32 shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
            key={idx}
            onClick={() => {
              navigate(
                `/post?type=${item?.seo_kategori}&content=${convertToSlug(item?.seo)}`,
              )
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
                src={item?.photo?.[0]?.gambar ?? '/img/logo.png'}
                alt={item?.photo?.[0]?.keterangan ?? 'logo'}
                className="h-[9rem] w-[9rem] rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

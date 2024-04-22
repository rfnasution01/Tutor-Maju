import { convertSlugToText, convertToSlug } from '@/libs/helpers/format-text'
import TimeSinceUploaded from '@/libs/helpers/timeUploaded'
import { BeritaDetailType } from '@/libs/interface'
import { Eye, Timer } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function PostContent({ data }: { data: BeritaDetailType[] }) {
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const contentParams = searchParams.get('content')

  return (
    <div className="col-span-9 flex flex-col gap-y-32 phones:col-span-12">
      <p className="font-roboto text-[3rem]">
        {convertSlugToText(contentParams)}
      </p>
      <div className="grid grid-cols-12 gap-32">
        {data?.map((item, idx) => (
          <div
            className="col-span-3 flex transform-gpu flex-col rounded-2xl border bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer phones:col-span-6"
            key={idx}
            onClick={() => {
              navigate(
                `/post?type=${item?.seo_kategori}&content=${convertToSlug(item?.seo)}`,
              )
            }}
          >
            <img
              src={item?.photo?.[0]?.gambar ?? '/img/logo.png'}
              alt={item?.photo?.[0]?.keterangan ?? 'logo'}
              className="h-[20rem] w-full"
            />
            <div className="flex flex-col gap-y-12 p-32">
              {/* --- Title --- */}
              <div className="flex flex-col gap-y-8">
                <p className="font-roboto text-[3rem]">{item?.judul}</p>
                <span
                  className={`line-clamp-3 font-light`}
                  dangerouslySetInnerHTML={{ __html: item?.isi }}
                />
              </div>
              {/* Hits  */}
              <div className="flex items-center gap-x-24">
                <div className="flex items-center gap-x-4">
                  <Timer size={14} />
                  <div className="italic text-slate-500">
                    <TimeSinceUploaded uploadTime={item?.tanggal} />
                  </div>
                </div>
                <div className="block phones:hidden">
                  <div className="flex items-center gap-x-4">
                    <Eye size={14} />
                    <p className="italic text-slate-500">
                      {item?.hits ?? 0} Viewer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

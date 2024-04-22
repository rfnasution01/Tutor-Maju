import { Pagination } from '@/components/Pagination'
import { convertToSlug } from '@/libs/helpers/format-text'
import TimeSinceUploaded from '@/libs/helpers/timeUploaded'
import { BeritaType } from '@/libs/interface'
import { useNavigate } from 'react-router-dom'

export function MappingBerita({
  berita,
  totalPage,
}: {
  berita: BeritaType[]
  totalPage: number
}) {
  const navigate = useNavigate()

  return (
    <div className="scrollbar flex  flex-col gap-y-32 overflow-y-auto">
      <p className="font-roboto text-[3rem]">Headline News</p>
      {/* Main News */}
      <div
        className="flex rounded-2xl border bg-white p-32 shadow-md hover:cursor-pointer"
        onClick={() => {
          navigate(`/`)
        }}
      >
        <div className="flex flex-1 flex-col gap-y-24">
          {/* --- Best of --- */}
          <div className="flex">
            <p className="border-l-8 border-primary-shade-200 bg-primary-shade-200 bg-opacity-10 p-16 font-roboto text-[2rem] uppercase">
              Best of the week
            </p>
          </div>
          {/* --- Tag --- */}
          <div className="flex items-center gap-x-24">
            <p>Blockchain News</p>
            <p className="italic text-slate-500">4 jam yang lalu</p>
          </div>
          {/* --- Title --- */}
          <p className="font-roboto text-[3rem]">
            Top Analyst Unveils Catalyst That Could Trigger Nearly 50% Surge for
            ETH - Here's His Outlook
          </p>
          {/* --- Hastag --- */}
          <div className="flex items-center gap-x-12">
            <p className="text-slate-500">#Ethereum</p>
            <p className="text-slate-500">#Analytics</p>
          </div>
          {/* --- Read Article --- */}
          <div className="flex">
            <div className="rounded-lg border border-transparent bg-primary px-24 py-12 text-center text-[2rem] text-white hover:cursor-not-allowed">
              Read Article
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img src="/img/cosmic.png" alt="berita" className="w-[40rem]" />
        </div>
      </div>
      <div className="flex flex-col gap-y-32">
        <p className="font-roboto text-[3rem]">News</p>
        <div className="grid grid-cols-12 gap-32">
          {berita?.map((item, idx) => (
            <div
              className="col-span-4 flex transform-gpu flex-col gap-y-12 border bg-white p-32 shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer phones:col-span-12"
              key={idx}
              onClick={() => {
                navigate(
                  `/post?type=${item?.seo_kategori}&content=${convertToSlug(item?.seo)}`,
                )
              }}
            >
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
              <p className="font-roboto text-[3rem]">{item?.judul}</p>
              <span
                className={`line-clamp-3 font-light`}
                dangerouslySetInnerHTML={{ __html: item?.isi }}
              />
            </div>
          ))}
        </div>

        <Pagination
          totalPage={totalPage}
          classes="flex justify-end px-32 pb-32"
        />
      </div>
    </div>
  )
}

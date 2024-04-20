import { convertToSlug } from '@/libs/helpers/format-text'
import TimeSinceUploaded from '@/libs/helpers/timeUploaded'
import { useSearch } from '@/libs/hooks/useSearch'
import { BeritaType } from '@/libs/interface'
import { getSearchSlice } from '@/store/reducer/stateSearch'
import { useGetBeritaQuery } from '@/store/slices/beritaAPI'
import { useGetPengumumanQuery } from '@/store/slices/pengumunanAPI'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function MappingPengumuman() {
  const navigate = useNavigate()
  const { currentPage } = useSearch()
  const pageSize = 3
  const pageNumber = currentPage ?? 1
  const { find } = useSelector(getSearchSlice)
  const [pengumuman, setPengumuman] = useState<BeritaType[]>()

  const { data: dataPengumuman } = useGetPengumumanQuery({
    page_size: pageSize,
    page_number: pageNumber,
    search: find,
  })

  const [berita, setBerita] = useState<BeritaType[]>()

  const { data } = useGetBeritaQuery({
    page_size: pageSize,
    page_number: pageNumber,
    search: find,
  })

  useEffect(() => {
    if (data?.data) {
      setBerita(data?.data)
    }
  }, [data?.data])

  useEffect(() => {
    if (dataPengumuman?.data) {
      setPengumuman(dataPengumuman?.data)
    }
  }, [dataPengumuman?.data])

  return (
    <div className="flex h-full flex-col gap-y-32">
      {/* Item  */}
      <div
        className="flex flex-row items-center gap-x-32 hover:cursor-pointer"
        onClick={() => {
          navigate(`/news?page=dummy-text`)
        }}
      >
        <div className="flex-1">
          <div className="flex flex-col gap-y-16">
            {/* --- Tag --- */}
            <div className="flex items-center gap-x-24">
              <p>Blockchain News</p>
              <p className="italic text-slate-300">4 jam yang lalu</p>
            </div>
            {/* --- Title --- */}
            <p className="font-roboto text-[2rem]">
              Top Analyst Unveils Catalyst That Could Trigger Nearly 50% Surge
              for ETH - Here's His Outlook
            </p>
          </div>
        </div>
        <img
          src="/img/app-bg.jpg"
          alt="logo"
          className="h-[9rem] w-[9rem] rounded-2xl"
        />
      </div>
      {/* Item  */}
      {berita?.slice(0, 1).map((item, idx) => (
        <div
          className="hover:cursor-pointer"
          key={idx}
          onClick={() => {
            navigate(`/news?page=${item?.seo}`)
          }}
        >
          <div className="flex flex-row items-center gap-x-32">
            <div className="flex-1">
              <div className="flex flex-col gap-y-16">
                {/* --- Tag --- */}
                <div className="flex items-center gap-x-24">
                  <p>{item?.judul}</p>
                  <p className="italic text-slate-300">
                    <TimeSinceUploaded uploadTime={item?.tanggal} />
                  </p>
                </div>
                {/* --- Title --- */}
                <p className="font-roboto text-[2rem]">{item?.judul}</p>
              </div>
            </div>
            <img
              src={item?.photo?.gambar}
              alt="logo"
              className="h-[9rem] w-[9rem] rounded-2xl"
            />
          </div>
        </div>
      ))}
      {/* Item  */}
      {pengumuman?.slice(0, 1).map((item, idx) => (
        <div
          className="hover:cursor-pointer"
          key={idx}
          onClick={() => {
            navigate(`/news?page=${convertToSlug(item.seo)}`)
          }}
        >
          <div className="flex flex-row items-center gap-x-32">
            <div className="flex-1">
              <div className="flex flex-col gap-y-16">
                {/* --- Tag --- */}
                <div className="flex items-center gap-x-24">
                  <p>{item?.judul}</p>
                  <p className="italic text-slate-300">
                    <TimeSinceUploaded uploadTime={item?.tanggal} />
                  </p>
                </div>
                {/* --- Title --- */}
                <p className="font-roboto text-[2rem]">{item?.judul}</p>
              </div>
            </div>
            <img
              src={item?.photo?.gambar}
              alt="logo"
              className="h-[9rem] w-[9rem] rounded-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

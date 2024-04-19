import { Button } from '@/components/Button'
import { Pagination } from '@/components/Pagination'
import TimeSinceUploaded from '@/libs/helpers/timeUploaded'
import { useSearch } from '@/libs/hooks/useSearch'
import { BeritaType } from '@/libs/interface'
import { getSearchSlice } from '@/store/reducer/stateSearch'
import { useGetBeritaQuery } from '@/store/slices/beritaAPI'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function MappingBerita() {
  const { currentPage } = useSearch()
  const { find } = useSelector(getSearchSlice)
  const pageSize = 3
  const pageNumber = currentPage ?? 1
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

  const totalPage = Math.ceil(berita?.length ?? 0 / pageSize)

  return (
    <div className="grid h-full grid-rows-12 gap-y-32 ">
      {/* Main News */}
      <div className="row-span-7 flex">
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
            <Button
              rounded="rounded-xl"
              borderColor="border-primary-shade-200"
              textColor="text-primary-shade-200 hover:bg-primary-shade-200 hover:text-white hover:border-transparent"
              child={<div className="px-48">Read Article</div>}
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img src="/img/cosmic.png" alt="berita" className="w-[40rem]" />
        </div>
      </div>
      <div className="row-span-5 flex flex-col gap-y-32">
        <div className="grid grid-cols-12 gap-x-32">
          <div className="col-span-4 flex flex-col gap-y-24 hover:cursor-pointer">
            {/* --- Tag --- */}
            <div className="flex items-center gap-x-24">
              <p>Blockchain News</p>
              <p className="italic text-slate-500">4 jam yang lalu</p>
            </div>
            {/* --- Title --- */}
            <p className="font-roboto text-[3rem]">
              Top Analyst Unveils Catalyst That Could Trigger Nearly 50% Surge
              for ETH - Here's His Outlook
            </p>
          </div>
          <div className="col-span-4 flex flex-col gap-y-24 hover:cursor-pointer">
            {/* --- Tag --- */}
            <div className="flex items-center gap-x-24">
              <p>Blockchain News</p>
              <p className="italic text-slate-500">12 jam yang lalu</p>
            </div>
            {/* --- Title --- */}
            <p className="font-roboto text-[3rem]">
              Over 65% of Crypto-Related Tweets and 85% of Conversations on Red
              Markets
            </p>
          </div>
          {berita?.slice(0, 1).map((item, idx) => (
            <div
              className="col-span-4 flex flex-col gap-y-24 hover:cursor-pointer"
              key={idx}
            >
              {/* --- Tag --- */}
              <div className="flex items-center gap-x-24">
                <p>{item?.kategori}</p>
                <p className="italic text-slate-500">
                  <TimeSinceUploaded uploadTime={item?.tanggal} />
                </p>
              </div>
              {/* --- Title --- */}
              <p className="font-roboto text-[3rem]">{item?.judul}</p>
            </div>
          ))}
        </div>

        <Pagination
          totalPage={totalPage === 0 ? 1 : totalPage}
          classes="flex justify-end px-32 pb-32"
        />
      </div>
    </div>
  )
}

import { HeaderPengumuman } from '@/features/pengumuman'
import TimeSinceUploaded from '@/libs/helpers/timeUploaded'
import { BeritaType } from '@/libs/interface'
import { getSearchSlice } from '@/store/reducer/stateSearch'
import { useGetBeritaKategoriQuery } from '@/store/slices/beritaAPI'
import { useGetPengumumanKategoriQuery } from '@/store/slices/pengumunanAPI'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BestNews } from '../news'

export default function NewsLayout() {
  const { find } = useSelector(getSearchSlice)
  const pageSize = 1
  const pageNumber = 1
  const [berita, setBerita] = useState<BeritaType[]>()
  const [pengumuman, setPengumuman] = useState<BeritaType[]>()
  const searchParams = new URLSearchParams(location.search)
  const typeParams = searchParams.get('type')

  const data = typeParams?.includes('berita-utama')
    ? berita?.[0]
    : pengumuman?.[0]

  const { data: dataBerita } = useGetBeritaKategoriQuery(
    {
      page_size: pageSize,
      page_number: pageNumber,
      search: find,
      seo_kategori: typeParams,
    },
    { skip: typeParams === null },
  )

  useEffect(() => {
    if (dataBerita?.data) {
      setBerita(dataBerita?.data)
    }
  }, [dataBerita?.data])

  const { data: dataPengumuman } = useGetPengumumanKategoriQuery(
    {
      page_size: pageSize,
      page_number: pageNumber,
      search: find,
      seo_kategori: typeParams,
    },
    { skip: typeParams === null },
  )

  useEffect(() => {
    if (dataPengumuman?.data) {
      setPengumuman(dataPengumuman?.data)
    }
  }, [dataPengumuman?.data])

  return (
    <main className="scrollbar flex h-full flex-col gap-x-32 overflow-scroll bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 px-32 pt-32">
      <div className="flex flex-row gap-x-32 rounded-2xl p-32">
        {/* <HeaderBerita /> */}
        <div className="w-5/12">
          <HeaderPengumuman />
        </div>
      </div>
      <div className="flex flex-col gap-y-32 px-32">
        <BestNews data={data} />
        <p className="font-roboto text-[3rem]">Related News</p>
        <div className="flex flex-col gap-y-32">
          <div className="grid grid-cols-12 gap-x-32">
            <div className="col-span-3 flex flex-col gap-y-24 hover:cursor-pointer">
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
            <div className="col-span-3 flex flex-col gap-y-24 hover:cursor-pointer">
              {/* --- Tag --- */}
              <div className="flex items-center gap-x-24">
                <p>Blockchain News</p>
                <p className="italic text-slate-500">6 jam yang lalu</p>
              </div>
              {/* --- Title --- */}
              <p className="font-roboto text-[3rem]">
                SnoopyBabe innovative memecoin with its ecosystem related WEB3 |
                Fairlaunch on Launchpad TonRaffles
              </p>
            </div>
            <div className="col-span-3 flex flex-col gap-y-24 hover:cursor-pointer">
              {/* --- Tag --- */}
              <div className="flex items-center gap-x-24">
                <p>Blockchain News</p>
                <p className="italic text-slate-500">12 jam yang lalu</p>
              </div>
              {/* --- Title --- */}
              <p className="font-roboto text-[3rem]">
                Over 65% of Crypto-Related Tweets and 85% of Conversations on
                Red Markets
              </p>
            </div>
            {berita?.slice(0, 1).map((item, idx) => (
              <div
                className="col-span-3 flex flex-col gap-y-24 hover:cursor-pointer"
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
        </div>
      </div>
    </main>
  )
}

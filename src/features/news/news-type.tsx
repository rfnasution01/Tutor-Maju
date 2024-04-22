import { convertSlugToText, convertToSlug } from '@/libs/helpers/format-text'
import TimeSinceUploaded from '@/libs/helpers/timeUploaded'
import { useSearch } from '@/libs/hooks/useSearch'
import { BeritaType } from '@/libs/interface'
import { getSearchSlice } from '@/store/reducer/stateSearch'
import { useGetBeritaKategoriQuery } from '@/store/slices/beritaAPI'
import { useGetPengumumanKategoriQuery } from '@/store/slices/pengumunanAPI'
import { Eye, Timer } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function NewsType() {
  const navigate = useNavigate()
  const { find } = useSelector(getSearchSlice)
  const { currentPage } = useSearch()
  const pageSize = 3
  const pageNumber = currentPage ?? 1
  const [berita, setBerita] = useState<BeritaType[]>()
  const [pengumuman, setPengumuman] = useState<BeritaType[]>()
  const searchParams = new URLSearchParams(location.search)
  const typeParams = searchParams.get('type')

  const data = typeParams?.includes('berita-utama') ? berita : pengumuman

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
  }, [dataBerita?.data, find])

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
  }, [dataPengumuman?.data, find])
  return (
    <>
      <p className="font-roboto text-[3rem]">{convertSlugToText(typeParams)}</p>
      <div className="grid grid-cols-12 gap-32 ">
        {/* -- Item -- */}
        {data?.map((item, idx) => (
          <div
            className="col-span-3 flex transform-gpu flex-col rounded-2xl border bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer phones:col-span-6"
            key={idx}
            onClick={() => {
              navigate(
                `/post?type=${typeParams}&content=${convertToSlug(item?.seo)}`,
              )
            }}
          >
            <img
              src={item?.photo?.gambar ?? '/img/logo.png'}
              alt={item?.photo?.keterangan ?? 'logo'}
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
    </>
  )
}

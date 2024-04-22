import { useSelector } from 'react-redux'
import { getBiodataSekolahSlice } from '@/store/reducer/stateSekolah'

export function SettingSekolah() {
  const biodataSekolah = useSelector(getBiodataSekolahSlice)

  return (
    <div className="col-span-6 flex items-center gap-x-16 rounded-2xl bg-white p-32 phones:col-span-12">
      <img
        src="/img/logo.png"
        alt="logo"
        className="w-[18rem] phones:w-[12rem]"
      />
      <div className="flex flex-1 flex-col gap-y-8 text-[2rem]">
        <div className="flex w-full">
          <p className="w-3/12 ">NPSN</p>
          <p className="w-1/12 text-center">:</p>
          <p className="w-8/12">{biodataSekolah?.npsn}</p>
        </div>
        <div className="flex w-full">
          <p className="w-3/12 ">Nama</p>
          <p className="w-1/12 text-center">:</p>
          <p className="w-8/12">{biodataSekolah?.nama}</p>
        </div>
        <div className="flex w-full">
          <p className="w-3/12">Kabupaten</p>
          <p className="w-1/12 text-center">:</p>
          <p className="w-8/12">Tapanuli Utara</p>
        </div>
        <div className="flex w-full">
          <p className="w-3/12">Provinsi</p>
          <p className="w-1/12 text-center">:</p>
          <p className="w-8/12">Sumatera Utara</p>
        </div>
      </div>
    </div>
  )
}

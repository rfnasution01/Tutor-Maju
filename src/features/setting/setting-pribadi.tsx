import { getBiodataPribadiSlice } from '@/store/reducer/statePribadi'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'

export function SettingPribadi() {
  const biodataPribadi = useSelector(getBiodataPribadiSlice)

  return (
    <div className="col-span-9 flex items-center gap-x-16 rounded-2xl bg-white p-32 phones:col-span-12">
      <img
        src="/img/logo.png"
        alt="logo"
        className="block w-[18rem] phones:hidden"
      />
      <div className="flex flex-1 flex-col gap-y-8 text-[2rem]">
        <div className="flex w-full">
          <p className="w-5/12 phones:w-4/12">NISN</p>
          <p className="w-1/12 text-center">:</p>
          <p className="w-6/12">{biodataPribadi?.nisn}</p>
        </div>
        <div className="flex w-full">
          <p className="w-5/12 phones:w-4/12">Nama</p>
          <p className="w-1/12 text-center">:</p>
          <p className="w-6/12">{biodataPribadi?.nama}</p>
        </div>
        <div className="flex w-full">
          <p className="w-5/12 phones:w-4/12">Jenis Kelamin</p>
          <p className="w-1/12 text-center">:</p>
          <p className="w-6/12">
            {biodataPribadi?.jk.includes('L') ? 'Laki-laki' : 'Perempuan'}
          </p>
        </div>
        <div className="flex w-full">
          <p className="w-5/12 phones:w-4/12">Agama</p>
          <p className="w-1/12 text-center">:</p>
          <p className="w-6/12">{biodataPribadi?.agama}</p>
        </div>
        <div className="flex w-full">
          <p className="w-5/12 phones:w-4/12">Tanggal Lahir</p>
          <p className="w-1/12 text-center">:</p>
          <p className="w-6/12">
            {dayjs(biodataPribadi?.nisn).locale('id').format('DD MMMM YYYY')}
          </p>
        </div>
        <div className="flex w-full">
          <p className="w-5/12 phones:w-4/12">Email</p>
          <p className="w-1/12 text-center">:</p>
          <p className="w-6/12">{biodataPribadi?.email}</p>
        </div>
        <div className="flex w-full">
          <p className="w-5/12 phones:w-4/12">Whatsapp</p>
          <p className="w-1/12 text-center">:</p>
          <p className="w-6/12">{biodataPribadi?.wa}</p>
        </div>
      </div>
    </div>
  )
}

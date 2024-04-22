import { getBiodataPribadiSlice } from '@/store/reducer/statePribadi'
import { getBiodataSekolahSlice } from '@/store/reducer/stateSekolah'
import { useSelector } from 'react-redux'

export function HomeCBT() {
  const biodataPribadi = useSelector(getBiodataPribadiSlice)
  const biodataSekolah = useSelector(getBiodataSekolahSlice)

  return (
    <div className="grid grid-cols-12 gap-x-32">
      <div className="col-span-4 phones:col-span-6">
        <div className="flex flex-col rounded-2xl bg-white">
          <div
            className="bg-primary p-16 text-center text-white"
            style={{
              borderTopLeftRadius: '1rem',
              borderTopRightRadius: '1rem',
            }}
          >
            Your Info
          </div>
          <div className="flex flex-col gap-y-12 p-12">
            <p>{biodataPribadi?.nama ?? 'John'}</p>
            <p>{biodataSekolah?.nama ?? 'Akademi Ninja Konoha'}</p>
            <p>Kabupaten Tapanuli Utara</p>
            <p>Provinsi Sumatera Utara</p>
          </div>
          <div
            className="cursor-not-allowed bg-primary-shade-200 p-16 text-center text-white"
            style={{
              borderBottomLeftRadius: '1rem',
              borderBottomRightRadius: '1rem',
            }}
          >
            Update
          </div>
        </div>
      </div>
    </div>
  )
}

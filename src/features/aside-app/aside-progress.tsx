import { HeaderWithLogo } from '@/components/HeaderLogo'
import { MappingProgress } from './mapping-progress'
import { MappingTask } from './mapping-task'
import { useSelector } from 'react-redux'
import { getBiodataPribadiSlice } from '@/store/reducer/statePribadi'

export function AsideProgressApp() {
  const biodataPribadi = useSelector(getBiodataPribadiSlice)

  return (
    <div className="scrollbar flex h-full flex-col gap-y-32 overflow-y-scroll bg-white px-48 py-32">
      <HeaderWithLogo
        title={biodataPribadi?.nama}
        logo="/img/logo.png"
        classes="text-black text-[2rem]"
      />

      <MappingProgress />
      <MappingTask />
    </div>
  )
}

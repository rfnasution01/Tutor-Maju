import { HeaderWithLogo } from '@/components/HeaderLogo'
import { ChevronDown } from 'lucide-react'
import { MappingProgress } from './mapping-progress'
import { MappingTask } from './mapping-task'

export function AsideProgressApp() {
  return (
    <div className="scrollbar flex h-full flex-col gap-y-32 overflow-y-scroll bg-white px-48 py-32">
      <HeaderWithLogo
        title="John Doe"
        logo="/img/logo.png"
        classes="text-black text-[2rem]"
        addFunc={
          <span className="hover: cursor-pointer">
            <ChevronDown />
          </span>
        }
      />

      <MappingProgress />
      <MappingTask />
    </div>
  )
}

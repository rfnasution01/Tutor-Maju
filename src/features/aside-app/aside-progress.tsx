import { HeaderWithLogo } from '@/components/HeaderLogo'
import { UpgradePlan } from './upgrade-plan'
import { ChevronDown } from 'lucide-react'
import { MappingProgress } from './mapping-progress'

export function AsideProgressApp() {
  return (
    <div className="scrollbar flex h-full flex-col gap-y-32 overflow-y-scroll bg-white p-48">
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
      <UpgradePlan />
    </div>
  )
}

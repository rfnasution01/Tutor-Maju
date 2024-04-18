import { Button } from '@/components/Button'
import { HeaderWithLogo } from '@/components/HeaderLogo'
import { MappingNavigation } from './mapping-nav'
import { UpgradePlan } from './upgrade-plan'

export function AsideNavigationApp() {
  return (
    <div className="scrollbar flex h-full flex-col gap-y-32 overflow-y-scroll bg-white p-48">
      <HeaderWithLogo
        title="Tu7u"
        logo="/img/logo.png"
        classes="text-primary"
      />
      <Button
        child="Buy a Course"
        variant="solid"
        textColor="text-white"
        bgColor="bg-primary"
        rounded="rounded-md"
      />
      <MappingNavigation />
      <UpgradePlan />
    </div>
  )
}

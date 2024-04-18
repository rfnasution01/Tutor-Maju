import { Button } from '@/components/Button'
import { HeaderWithLogo } from '@/components/HeaderLogo'
import { MappingNavigation } from './mapping-nav'

export function AsideNavigationApp() {
  return (
    <div className="flex h-full flex-col gap-y-48 bg-white p-48">
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
    </div>
  )
}

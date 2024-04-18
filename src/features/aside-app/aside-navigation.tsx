import { Button } from '@/components/Button'
import { HeaderWithLogo } from '@/components/HeaderLogo'

export function AsideNavigationApp() {
  return (
    <div className="flex h-full flex-col gap-y-32 bg-white p-48">
      <HeaderWithLogo title="Tu7u" logo="/img/logo.png" />
      <Button
        child="Buy a Course"
        variant="solid"
        textColor="text-white"
        bgColor="bg-primary"
        rounded="rounded-md"
      />
    </div>
  )
}

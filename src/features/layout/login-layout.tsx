import { LogoTitle } from '@/components/Logo'
import { Outlet } from 'react-router-dom'

export default function LoginLayout() {
  return (
    <div className="scrollbar flex h-full items-center justify-center overflow-y-auto bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      <div className="scrollbar flex h-auto max-h-[85%] w-3/12 flex-col gap-y-32 overflow-y-auto rounded-2xl bg-white p-48 shadow-lg phones:max-h-[100%] phones:w-10/12">
        <LogoTitle />

        <Outlet />
      </div>
    </div>
  )
}

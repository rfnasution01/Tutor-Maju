import { Button } from '@/components/Button'
import { MappingNavigation } from './mapping-nav'
import { UpgradePlan } from './upgrade-plan'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export function AsideNavigationApp() {
  const navigate = useNavigate()

  return (
    <div className="scrollbar flex h-full flex-col gap-y-32 overflow-y-scroll bg-white px-48 py-32">
      <Link
        to="/"
        className="flex items-center justify-center text-center font-roboto text-[4rem] tracking-1.5 hover:cursor-pointer"
      >
        <h5 className=" border border-transparent pb-8 text-primary">Tutor</h5>
        <h5 className="border-b-2 border-primary pb-8 text-black">Maju</h5>
      </Link>
      <Button
        child="Buy a Course"
        variant="solid"
        textColor="text-white"
        bgColor="bg-primary"
        rounded="rounded-lg"
      />
      <MappingNavigation />
      <UpgradePlan />
      <Button
        variant="solid"
        bgColor="bg-primary-shade-200"
        textColor="text-white"
        rounded="rounded-lg"
        child={
          <div
            onClick={() => {
              Cookies.remove('token')
              navigate('/login')
            }}
            className="text-center"
          >
            Logout
          </div>
        }
      />
    </div>
  )
}

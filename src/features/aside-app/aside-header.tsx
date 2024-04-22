import { HeaderWithLogo } from '@/components/HeaderLogo'
import { DialogHelpers } from '@/components/ui/dialog'
import { AlignJustify, BellDot } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppHeaderNavigationMobile } from './app-header-navigation'

export function AsideHeader() {
  const navigate = useNavigate()
  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <div className="flex items-center justify-between gap-x-48 px-48 pt-32 phones:justify-start">
      <div className="flex flex-1 items-center gap-x-32">
        <span
          onClick={() => {
            setIsShow(true)
          }}
          className="hidden phones:block"
        >
          <AlignJustify />
        </span>
        <input
          type="text"
          className="w-6/12 rounded-lg border border-gray-300 p-16 text-[2rem] focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 phones:w-full"
          placeholder="Search"
        />
      </div>

      <div className="flex items-center gap-x-32">
        <span>
          <BellDot />
        </span>
        <span
          className="hidden phones:block"
          onClick={() => {
            navigate('/app/settings')
          }}
        >
          <HeaderWithLogo logo="/img/logo.png" />
        </span>
      </div>
      <DialogHelpers
        title={
          <div className="flex h-[7.6rem] items-center bg-primary-shade-500 px-24 text-[3.2rem] text-secondary">
            <Link to="/">
              Tutor<span className="text-primary-shade-200">Maju</span>
            </Link>
          </div>
        }
        open={isShow}
        setOpen={setIsShow}
        noPadding
        customComponent={<AppHeaderNavigationMobile setIsShow={setIsShow} />}
      />
    </div>
  )
}

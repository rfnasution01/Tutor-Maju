import { DialogHelpers } from '@/components/ui/dialog'
import { AlignJustify } from 'lucide-react'
import { useState } from 'react'
import { HeaderNavigationMobile } from './header-navigation-mobile'
import { LogoTitle } from '@/components/Logo'
import { Search } from '@/components/Search'
import { Link } from 'react-router-dom'

export function HeaderMobile() {
  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <div className="flex items-center justify-between gap-x-32 p-32 text-[2rem] shadow-md  ">
      <LogoTitle />
      <Search />
      <span
        onClick={() => {
          setIsShow(true)
        }}
      >
        <AlignJustify size={24} />
      </span>
      <DialogHelpers
        title={
          <Link
            to="/"
            className="flex h-[7.6rem] items-center bg-primary-shade-500 px-24 text-[3.2rem] text-secondary"
          >
            Tutor<span className="text-primary-shade-200">Maju</span>
          </Link>
        }
        open={isShow}
        setOpen={setIsShow}
        noPadding
        customComponent={<HeaderNavigationMobile setIsShow={setIsShow} />}
      />
    </div>
  )
}

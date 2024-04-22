import { DialogHelpers } from '@/components/ui/dialog'
import { Grid, List } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HeaderNavigationMobile } from './header-navigation-mobile'

export function HeaderMobile() {
  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <div className="flex items-center justify-between gap-x-32 bg-primary p-32 text-[2rem] text-white">
      <Link
        to="/"
        className="flex items-center gap-x-8 rounded-full bg-primary-shade-200 px-24 py-8 hover:cursor-pointer hover:bg-transparent"
      >
        <Grid size={12} />
        <span className="text-nowrap">Tutor Maju</span>
      </Link>
      <span
        onClick={() => {
          setIsShow(true)
        }}
      >
        <List size={16} />
      </span>
      <DialogHelpers
        title={
          <h3 className="flex h-[7.6rem] items-center bg-primary-shade-500 px-24 text-[3.2rem] text-secondary">
            Tutor<span className="text-primary-shade-200">Maju</span>
          </h3>
        }
        open={isShow}
        setOpen={setIsShow}
        noPadding
        customComponent={<HeaderNavigationMobile />}
      />
    </div>
  )
}

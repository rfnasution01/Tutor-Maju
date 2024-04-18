import { DataNavigation } from '@/libs/consts'
import { convertToSlug } from '@/libs/helpers/format-text'
import { usePathname } from '@/libs/hooks/usePathname'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

export function MappingNavigation() {
  const { secondPathname } = usePathname()

  const isActivePage = (item: string) => {
    if (
      secondPathname?.includes(convertToSlug(item).toLowerCase()) ||
      (secondPathname === undefined && item.toLowerCase() === 'dashboard')
    ) {
      return true
    }
    return false
  }

  return (
    <div className="flex flex-col gap-y-12">
      {DataNavigation.map((item, idx) => (
        <Link
          to={convertToSlug(item?.title)}
          className={clsx('flex items-center gap-x-12 border-l-4 p-12', {
            'border-transparent hover:border-primary hover:text-primary':
              !isActivePage(item?.title),
            'border-primary text-primary': isActivePage(item?.title),
          })}
          key={idx}
        >
          <span>{item?.icon}</span>
          <h5 className="font-sf-pro text-[2rem]">{item?.title}</h5>
        </Link>
      ))}
    </div>
  )
}

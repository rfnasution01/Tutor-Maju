import { LogoTitle } from '@/components/Logo'
import { Search } from '@/components/Search'
import { convertToSlug } from '@/libs/helpers/format-text'
import clsx from 'clsx'
import { Grid } from 'lucide-react'
import { Link } from 'react-router-dom'

export function HeaderNavigation() {
  return (
    <div className="flex w-full items-center justify-between gap-x-80 bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 p-32 text-[2rem] text-black">
      <div className="flex items-center gap-x-32">
        <LogoTitle />
        {['Berita Utama', 'Pengumuman'].map((item, idx) => (
          <Link
            to={
              item.includes('Tutor Maju')
                ? '/'
                : `/news?type=${convertToSlug(item)}`
            }
            className={clsx(
              'flex items-center gap-x-8 rounded-full px-24 py-8 hover:cursor-pointer',
              {
                'bg-primary-shade-200 hover:bg-transparent':
                  item.includes('Tutor Maju'),
                'hover:text-primary-shade-200': !item.includes('Tutor Maju'),
              },
            )}
            key={idx}
          >
            {item.includes('Tutor Maju') && <Grid size={12} />}
            <span className="text-nowrap">{item}</span>
          </Link>
        ))}
      </div>

      {/* --- Search --- */}
      <Search />

      <div className="flex items-center gap-x-32">
        {['Login', 'Registrasi'].map((item, idx) => (
          <Link
            to={`/${item?.toLowerCase()}`}
            className="hover:text-primary-shade-200"
            key={idx}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  )
}

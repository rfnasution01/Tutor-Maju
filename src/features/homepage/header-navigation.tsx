import { LogoTitle } from '@/components/Logo'
import { convertToSlug } from '@/libs/helpers/format-text'
import { setStateSearch } from '@/store/reducer/stateSearch'
import clsx from 'clsx'
import { debounce } from 'lodash'
import { Grid } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export function HeaderNavigation() {
  const dispatch = useDispatch()

  const handleSearch = debounce((searchValue: string) => {
    dispatch(setStateSearch({ find: searchValue }))
  }, 300)

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    handleSearch(value)
  }
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
      <input
        type="text"
        className="w-full rounded-2xl border border-gray-300 p-16 text-[2rem] text-black focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
        placeholder="Search"
        onChange={(e) => onSearch(e)}
      />

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

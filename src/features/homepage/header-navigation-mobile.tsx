import { Button } from '@/components/Button'
import { convertToSlug } from '@/libs/helpers/format-text'
import clsx from 'clsx'
import Cookies from 'js-cookie'
import { Grid } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export function HeaderNavigationMobile() {
  const navigate = useNavigate()
  const token = Cookies.get('token')

  return (
    <div className="flex flex-col items-center gap-y-32">
      <div className="flex flex-col items-center  gap-32 text-black">
        {['Tutor Maju', 'Berita Utama', 'Pengumuman'].map((item, idx) => (
          <Link
            to={
              item.includes('Tutor Maju')
                ? '/'
                : `/news?type=${convertToSlug(item)}`
            }
            className={clsx(
              'flex items-center gap-x-8 rounded-full px-24 py-8 hover:cursor-pointer',
              {
                'bg-primary-shade-200 text-white hover:bg-transparent':
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

      {token === undefined ? (
        <div className="flex flex-col items-center justify-center gap-32">
          {['Login', 'Registrasi'].map((item, idx) => (
            <Link
              to={`/${item?.toLowerCase()}`}
              className="text-black hover:text-primary-shade-200"
              key={idx}
            >
              <Button
                child={<div className="">{item}</div>}
                variant="solid"
                bgColor="bg-primary"
                textColor="text-white"
                rounded="rounded-lg"
              />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-black hover:text-primary-shade-200">
          <Button
            child={
              <div
                className=""
                onClick={() => {
                  Cookies.remove('token')
                  navigate('/login')
                }}
              >
                Logout
              </div>
            }
            variant="solid"
            bgColor="bg-primary"
            textColor="text-white"
            rounded="rounded-lg"
          />
        </div>
      )}
    </div>
  )
}

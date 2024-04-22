import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

export function UjianNavigation({ length = 20 }: { length?: number }) {
  const searchParams = new URLSearchParams(location.search)
  const pageParams = searchParams.get('page') ?? 1
  const navigate = useNavigate()

  return (
    <div className="flex flex-wrap gap-y-16">
      {Array.from({ length: length }, (_, index) => (
        <div
          className="flex w-1/4 items-center justify-center gap-16 hover:cursor-pointer phones:w-1/12"
          key={index}
          onClick={() => {
            navigate(`/ujian?page=${index + 1}`)
          }}
        >
          <span
            className={clsx(
              'rounded-full p-12 hover:rounded-full hover:bg-blue-500 hover:text-white',
              {
                'bg-blue-500 text-white': index + 1 === Number(pageParams),
              },
            )}
          >
            {index + 1}
          </span>
        </div>
      ))}
    </div>
  )
}

import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

export function ResultHeader({
  type,
  setType,
}: {
  type: string
  setType: Dispatch<SetStateAction<string>>
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-16">
        {['Statistik', 'Pembahasan'].map((item, idx) => (
          <div
            className={clsx(
              'border-b p-16 text-[1.8rem] hover:cursor-pointer',
              {
                'border-primary text-primary': item
                  ?.toLowerCase()
                  ?.includes(type),
                'border-transparent hover:border-primary hover:text-primary':
                  !item?.toLowerCase()?.includes(type),
              },
            )}
            key={idx}
            onClick={() => {
              setType(item.toLowerCase())
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

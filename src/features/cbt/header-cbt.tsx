import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

export function HeaderCBT({
  type,
  setType,
}: {
  type: string
  setType: Dispatch<SetStateAction<string>>
}) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[3rem] font-bold">Computer Based Test</h1>
      <div className="flex items-center gap-x-16">
        {['Home', 'Account Setting', 'Pengumuman', 'Percobaan', 'Ujian'].map(
          (item, idx) => (
            <div
              className={clsx(
                'border-b p-16 text-[1.8rem] hover:cursor-pointer',
                {
                  'border-primary text-primary': item
                    ?.toLowerCase()
                    .includes(type),
                  'border-transparent hover:border-primary hover:text-primary':
                    !item?.toLowerCase().includes(type),
                },
              )}
              key={idx}
              onClick={() => {
                setType(item.toLowerCase())
              }}
            >
              {item}
            </div>
          ),
        )}
      </div>
    </div>
  )
}
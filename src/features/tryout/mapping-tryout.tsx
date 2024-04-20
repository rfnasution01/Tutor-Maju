import { DataTryout } from '@/libs/consts/dummy/data-try-out'
import clsx from 'clsx'
import { Timer, Users } from 'lucide-react'

export function MappingTryOut({ type }: { type: string }) {
  return (
    <div className="grid grid-cols-12 gap-32">
      {DataTryout.filter((item) => item?.type.includes(type)).map(
        (item, idx) => (
          <div
            className={clsx(
              `col-span-4 flex flex-col gap-y-24 rounded-2xl p-24 hover:cursor-pointer hover:shadow-lg`,
              { 'bg-purple-200': item?.tag.includes('Sedang Berlangsung') },
              { 'bg-white': !item?.tag.includes('Sedang Berlangsung') },
            )}
            key={idx}
          >
            <div>
              <span
                className={clsx(
                  'rounded-full px-16 py-8 text-[1.2rem] text-white',
                  {
                    'bg-rose-500': item?.tag.includes('Sedang Berlangsung'),
                    'bg-amber-500': !item?.tag.includes('Sedang Berlangsung'),
                  },
                )}
              >
                {item?.tag}
              </span>
            </div>
            <div className="flex flex-col gap-y-8">
              <p className="font-bold">{item?.title}</p>
              <div className="flex items-center gap-x-4 text-slate-500">
                <span>
                  <Timer size={12} />
                </span>
                {item?.date}
              </div>
              <div className="flex items-center gap-x-4 text-slate-500">
                <span>
                  <Users size={12} />
                </span>
                {item?.pendaftar}
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  )
}

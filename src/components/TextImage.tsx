import { ReactNode } from 'react'

export function TextImage({
  height = 'h-[30rem]',
  image = '/img/app-bg.jpg',
  tag = 'Blockchain News',
  time = '4 jam yang lalu',
  title = `Top Analyst Unveils Catalyst That Could Trigger Nearly 50% Surge for
  ETH - Here's His Outlook`,
}: {
  height?: string
  image?: string
  tag?: string
  time?: string | ReactNode
  title?: string
}) {
  return (
    <div
      className={`relative col-span-4 rounded-2xl hover:cursor-pointer hover:shadow-2xl`}
    >
      <img
        src={image}
        alt="bg"
        className={`${height} w-full rounded-lg object-cover`}
      />
      <div className="absolute left-[2rem] top-[2rem] h-[calc(100%_-_4rem)] w-[calc(100%_-_4rem)] p-8">
        <div className="flex h-full flex-col justify-end gap-y-8 text-slate-200">
          {/* --- Tag --- */}
          <div className="flex items-center gap-x-24">
            <p>{tag}</p>
            <div className="italic text-slate-50">{time}</div>
          </div>
          {/* --- Title --- */}
          <p className="font-roboto text-[3rem]">{title}</p>
        </div>
      </div>
    </div>
  )
}

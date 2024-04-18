import { ProgressBar } from '@/components/ProgressBar'
import { DataProgress } from '@/libs/consts/dummy/data-progress'

export function MappingProgress() {
  return (
    <div className="flex flex-col gap-y-24">
      <span className="text-[1.8rem] font-bold uppercase">Progress</span>
      <div className="flex flex-col gap-y-16">
        {DataProgress.map((item, idx) => (
          <div
            className="flex transform-gpu items-center gap-x-12 rounded-lg bg-slate-100 p-16 transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
            key={idx}
          >
            <span className="w-2/12 text-center">{item?.icon}</span>
            <div className="flex flex-1 flex-col gap-y-4">
              <h5 className="font-bold">{item?.title}</h5>
              <h6 className="text-[1.4rem] font-light text-slate-500">
                {item?.desc}
              </h6>
            </div>
            <ProgressBar
              classes="h-[1.8rem] w-4/12"
              primaryColor={
                idx === 0
                  ? 'bg-red-300'
                  : idx === 1
                    ? 'bg-yellow-300'
                    : idx === 2
                      ? 'bg-green-300'
                      : 'bg-blue-300'
              }
              secondaryColor={
                idx === 0
                  ? 'bg-red-100'
                  : idx === 1
                    ? 'bg-yellow-100'
                    : idx === 2
                      ? 'bg-green-100'
                      : 'bg-blue-100'
              }
              percent={item?.progress}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

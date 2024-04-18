import { DataUpcomingTask } from '@/libs/consts/dummy/data-task'
import { BookOpen, Medal } from 'lucide-react'

export function MappingTask() {
  return (
    <div className="flex flex-col gap-y-24">
      <span className="text-[1.8rem] font-bold uppercase">Upcoming Task</span>
      <div className="flex flex-col gap-y-16">
        {DataUpcomingTask.map((item, idx) => (
          <div
            className="flex transform-gpu items-center gap-x-12 rounded-lg transition-transform duration-300 hover:scale-105 hover:cursor-pointer hover:shadow"
            key={idx}
          >
            <span className="p-12 text-center">
              {item?.category.includes('course') ? <BookOpen /> : <Medal />}
            </span>
            <div className="flex flex-1 flex-col gap-y-4">
              <h5 className="font-bold">{item?.title}</h5>
              <h6 className="text-[1.4rem] font-light text-slate-500">
                {item?.date}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

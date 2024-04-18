import { DataLesson } from '@/libs/consts/dummy/data-lesson'
import clsx from 'clsx'
import { Bookmark, Play } from 'lucide-react'

export function MappingCourses({ type }: { type: string }) {
  return (
    <div className="grid grid-cols-12 gap-32">
      {/* {DataLesson.map((item, idx) => ( */}
      {DataLesson.filter((item) => item?.type.includes(type)).map(
        (item, idx) => (
          <div className={`relative col-span-4 hover:shadow-2xl`} key={idx}>
            <img
              src={item?.imgBg}
              alt="login"
              className="w-full rounded-lg object-cover"
            />
            <div className="absolute left-[2rem] top-[2rem] h-[calc(100%_-_4rem)] w-[calc(100%_-_4rem)] p-8">
              <div className="flex h-full flex-col gap-y-8">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-y-8">
                    <div className="flex items-center gap-12">
                      {item?.tag.map((data, id) => (
                        <div
                          className={clsx(
                            'rounded-full px-16 py-4 text-[1.2rem] text-white',
                            {
                              'bg-red-500': data
                                ?.toLowerCase()
                                .includes('bumn'),
                              'bg-yellow-500': data
                                ?.toLowerCase()
                                .includes('cpns'),
                              'bg-green-500': data
                                ?.toLowerCase()
                                .includes('kedinasan'),
                              'bg-blue-500': data
                                ?.toLowerCase()
                                .includes('pppk'),
                            },
                          )}
                          key={id}
                        >
                          {data}
                        </div>
                      ))}
                    </div>
                    <h5 className="text-[1.8rem] font-bold text-slate-200">
                      {item?.title}
                    </h5>
                    <h6 className="font-light text-slate-300">
                      {item?.lessons}
                    </h6>
                  </div>
                  <span className="text-yellow-800 hover:cursor-pointer">
                    <Bookmark
                      fill={
                        item?.type.includes('favorite')
                          ? '#854D0E80'
                          : 'transparent'
                      }
                    />
                  </span>
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <div className="rounded-2xl bg-white px-24 py-8 opacity-40 hover:cursor-pointer hover:bg-red-600 hover:text-white hover:opacity-100">
                    <Play size={30} />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-8">
                    <img
                      src={item?.imgProfile}
                      alt={item?.lessons}
                      className="w-[4rem] rounded-full border border-white"
                    />
                    <span className="text-slate-200">John Doe</span>
                  </div>
                  <h6 className="font-light text-slate-300">{item?.time}</h6>
                </div>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  )
}

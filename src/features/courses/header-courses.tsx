import clsx from 'clsx'
import { useState } from 'react'

export function HeaderCourses() {
  const [coursesChoose, setCoursesChoose] = useState<string>('all')

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[3rem] font-bold">All Courses</h1>
      <div className="flex items-center gap-x-16">
        {['All', 'Ongoing', 'Favorite', 'Complete'].map((item, idx) => (
          <div
            className={clsx(
              'border-b p-16 text-[1.8rem] hover:cursor-pointer',
              {
                'border-primary text-primary': item
                  ?.toLowerCase()
                  .includes(coursesChoose),
                'border-transparent hover:border-primary hover:text-primary':
                  !item?.toLowerCase().includes(coursesChoose),
              },
            )}
            key={idx}
            onClick={() => {
              setCoursesChoose(item.toLowerCase())
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

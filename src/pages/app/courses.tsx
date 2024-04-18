import { HeaderCourses, MappingCourses } from '@/features/courses'
import { useState } from 'react'

export default function CoursesApp() {
  const [type, setType] = useState<string>('all')

  return (
    <div className="flex flex-col gap-y-32">
      <HeaderCourses coursesChoose={type} setCoursesChoose={setType} />
      <MappingCourses type={type} />
    </div>
  )
}

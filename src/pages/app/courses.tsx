import { HeaderCourses, MappingCourses } from '@/features/courses'
import { useState } from 'react'

export default function CoursesApp() {
  const [type, setType] = useState<string>('all')

  return (
    <div className="flex flex-col gap-y-32">
      <HeaderCourses type={type} setType={setType} />
      <MappingCourses type={type} />
    </div>
  )
}

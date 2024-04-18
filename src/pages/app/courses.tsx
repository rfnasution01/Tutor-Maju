import { HeaderCourses, MappingCourses } from '@/features/courses'

export default function CoursesApp() {
  return (
    <div className="flex flex-col gap-y-32">
      <HeaderCourses />
      <MappingCourses />
    </div>
  )
}

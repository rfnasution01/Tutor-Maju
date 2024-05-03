import { ExamHeader } from '@/features/exam'

export default function UjianPage() {
  return (
    <div className="scrollbar flex h-full max-h-screen flex-col overflow-y-auto bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      {/* --- HEader --- */}
      <ExamHeader />
      <div className="flex-1 p-32">
        <div className="rounded-2xl bg-white p-32 shadow hover:shadow-md">
          <p className="font-roboto text-[2.4rem]">Informasi Ujian</p>
        </div>
      </div>
    </div>
  )
}

import { Timer } from 'lucide-react'

export function ExamProgress({ totalSoal = 10 }: { totalSoal?: number }) {
  const smartlearningData = JSON.parse(
    localStorage.getItem('smartlearning') || '{}',
  )

  const totalDijawab = smartlearningData?.jawaban?.length

  return (
    <div className="flex flex-col gap-y-8 px-80 pt-32 text-[2rem] phones:px-32">
      {/* --- Text --- */}
      <div className="flex items-center justify-between gap-x-32">
        <p>
          Dijawab <span className="text-primary">{totalDijawab}</span>/
          {totalSoal}
        </p>
        <div className="flex items-center gap-x-8">
          <span>
            <Timer />
          </span>
          <div className="flex items-center">
            <p>
              Waktu Tersisa :{' '}
              <span className="text-[2rem] font-bold">01H:45m</span>
            </p>
          </div>
        </div>
      </div>
      {/* --- Progressbar --- */}
      <div className="h-[3rem] w-full rounded-full bg-indigo-200">
        <div
          className="h-full rounded-full bg-indigo-500"
          style={{ width: `${(totalDijawab / totalSoal) * 100}%` }}
        />
      </div>
    </div>
  )
}

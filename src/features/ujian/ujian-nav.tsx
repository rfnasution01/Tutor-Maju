import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

export function UjianNavigation({
  length = 20,
  idSoal,
  setPageNumber,
}: {
  length?: number
  idSoal: string
  setPageNumber: Dispatch<SetStateAction<number>>
}) {
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const numberParams = searchParams.get('number') ?? 1

  return (
    <div className="grid grid-cols-12 gap-24 rounded-2xl border bg-white p-32 shadow-lg hover:cursor-pointer">
      {Array.from({ length: length }, (_, index) => (
        <div
          className={clsx(
            'col-span-3 flex items-center justify-center rounded-lg border p-12',
            { 'bg-blue-700 text-white': index + 1 === Number(numberParams) },
          )}
          key={index}
          style={{ position: 'relative' }}
          onClick={() => {
            navigate(`/exam?soal=${idSoal}&number=${index + 1}`)
            setPageNumber(index + 1)
          }}
        >
          {index + 1}
          <div
            style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              backgroundColor: '#A9A9A9',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '10px',
              color: '#fff',
            }}
          ></div>
        </div>
      ))}
    </div>
  )
}

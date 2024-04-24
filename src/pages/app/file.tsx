import { HeaderFile, MappingMateri, MappingRekaman } from '@/features/file'
import { useState } from 'react'

export default function FileApp() {
  const [type, setType] = useState<string>('materi')

  return (
    <div className="flex flex-col gap-y-32">
      <HeaderFile type={type} setType={setType} />
      <div className="grid grid-cols-12 gap-32">
        <>
          {type?.includes('rekaman') ? <MappingRekaman /> : <MappingMateri />}
        </>
      </div>
    </div>
  )
}

import { HeaderTryOut } from '@/features/tryout'
import { MappingTryOut } from '@/features/tryout/mapping-tryout'
import { useState } from 'react'

export default function TryOutApp() {
  const [type, setType] = useState<string>('all')

  return (
    <div className="flex flex-col gap-y-32">
      <HeaderTryOut type={type} setType={setType} />
      <MappingTryOut type={type} />
    </div>
  )
}

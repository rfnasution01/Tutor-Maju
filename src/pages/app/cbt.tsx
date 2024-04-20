import { HeaderCBT, MappingCBT } from '@/features/cbt'
import { useState } from 'react'

export default function CBTApp() {
  const [type, setType] = useState<string>('all')

  return (
    <div className="flex flex-col gap-y-32">
      <HeaderCBT type={type} setType={setType} />
      <MappingCBT type={type} />
    </div>
  )
}

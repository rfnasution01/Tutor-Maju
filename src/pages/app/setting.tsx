import { HeaderSetting, MappingSetting } from '@/features/setting'
import { useState } from 'react'

export default function TryOutApp() {
  const [type, setType] = useState<string>('pribadi')

  return (
    <div className="flex flex-col gap-y-32">
      <HeaderSetting type={type} setType={setType} />
      <MappingSetting type={type} />
    </div>
  )
}

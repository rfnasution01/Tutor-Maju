import { SettingPribadi } from './setting-pribadi'
import { SettingSekolah } from './setting-sekolah'

export function MappingSetting({ type }: { type: string }) {
  return (
    <div className="grid grid-cols-12 gap-32">
      {type.toLowerCase().includes('pribadi') ? (
        <SettingPribadi />
      ) : (
        <SettingSekolah />
      )}
    </div>
  )
}

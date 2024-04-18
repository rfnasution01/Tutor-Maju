import { Button } from '@/components/Button'
import { FolderLock } from 'lucide-react'

export function UpgradePlan() {
  return (
    <div className="flex flex-col items-center gap-y-24 rounded-2xl bg-slate-50 p-24">
      <span>
        <FolderLock size={48} />
      </span>
      <p className="text-center">
        Upgrade to <span className="font-bold">premium</span> for more resources
      </p>
      <Button
        variant="solid"
        bgColor="bg-primary"
        textColor="text-white"
        rounded="rounded-lg"
        child="Upgrade"
        classes="text-[1.6rem]"
      />
    </div>
  )
}

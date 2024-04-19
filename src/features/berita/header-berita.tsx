import clsx from 'clsx'
import { Grid } from 'lucide-react'

export function HeaderBerita() {
  return (
    <div className="flex w-full items-center gap-x-32 text-[2rem]">
      {['Tutor Maju', 'Berita Utama', 'Pengumuman'].map((item, idx) => (
        <div
          className={clsx(
            'flex items-center gap-x-8 rounded-full px-24 py-8 hover:cursor-pointer hover:bg-white',
            { 'bg-white': item.includes('Tutor Maju') },
          )}
          key={idx}
        >
          {item.includes('Tutor Maju') && <Grid size={12} />}
          <span>
            {item} {!item.includes('Tutor Maju') && '+'}
          </span>
        </div>
      ))}
    </div>
  )
}

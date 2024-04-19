import { Link } from 'react-router-dom'

export function PercobaanLangkah() {
  return (
    <div className="flex flex-col gap-y-12 rounded-2xl bg-white p-24">
      <p className="text-[2rem] font-semibold">
        Langkah-Langkah Mengikuti Ujian Percobaan
      </p>
      <ul className="ml-[3rem] list-decimal">
        <li>
          Pilih salah satu ujian percobaan dengan klik{' '}
          <span className="font-bold">Mulai</span>
        </li>
        <li>Silahkan jawab pertanyaan yang ada sampai selesai</li>
        <li>
          Bila ingin mengulangi ujian percobaan, klik{' '}
          <span className="font-bold">Reset</span>
        </li>
        <li>
          Untuk melakukan ujian yang sebenarnya, klik dashboard pada menu di
          atas atau{' '}
          <Link to="" className="text-primary">
            klik di sini
          </Link>
        </li>
      </ul>
    </div>
  )
}

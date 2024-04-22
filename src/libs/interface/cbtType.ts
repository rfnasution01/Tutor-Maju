export type UjianType = {
  id_ujian: string
  nama_ujian: string
  waktu_ujian: number
  tanggal_mulai: string
  tanggal_akhir: string
  skor: string | number
  jumlah_soal: number
  max_skor: string | null
  peringkat: string | null
  total_peserta: string | null
  tag: string | null
  nilai: {
    title: string
    skor: number
    true: number
    total: number
  }[]
}

export type SoalUjianType = {
  soal: string
}

export type SoalUjianParams = {
  id_ujian: string
}

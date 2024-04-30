export const konversiFormat = (data) => {
  const hasil = {
    id_ujian: data.idSoal,
    jawaban: {},
  }

  data.jawaban.forEach((jawaban) => {
    hasil.jawaban[jawaban.idSoal] = jawaban.jawab
  })

  return hasil
}

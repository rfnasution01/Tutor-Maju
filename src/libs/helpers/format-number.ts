export function isNumber(s) {
  return !isNaN(parseFloat(s)) && isFinite(s)
}

export function cekDanUpdateJawaban(jawaban) {
  // Mengecek apakah localStorage hasilJawaban sudah ada atau belum
  const hasilJawaban = localStorage.getItem('hasilJawaban')
  let jawabanArray = []

  // Jika localStorage hasilJawaban sudah ada, parse menjadi array
  if (hasilJawaban) {
    jawabanArray = JSON.parse(hasilJawaban)
  }

  // Mengecek apakah jawaban sudah ada di dalam hasilJawaban
  const jawabanIndex = jawabanArray.findIndex(
    (item) => item.number === jawaban.number,
  )

  // Jika jawaban belum ada, tambahkan ke dalam array
  if (jawabanIndex === -1) {
    jawabanArray.push(jawaban)
  } else {
    // Jika jawaban sudah ada, update dengan jawaban sekarang
    jawabanArray[jawabanIndex] = jawaban
  }

  // Simpan array hasilJawaban ke dalam localStorage
  localStorage.setItem('hasilJawaban', JSON.stringify(jawabanArray))
}

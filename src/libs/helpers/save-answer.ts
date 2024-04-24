export const handleSaveAnswer = (item, kodeSoal, noSoal) => {
  const smartlearningData = localStorage.getItem('smartlearning')
  if (!smartlearningData) {
    const newSmartlearningData = {
      idSoal: kodeSoal,
      jawaban: [
        {
          no: noSoal,
          jawab: item?.id,
        },
      ],
    }
    // Simpan objek baru ke localStorage smartlearning
    localStorage.setItem('smartlearning', JSON.stringify(newSmartlearningData))
  } else {
    // Jika localStorage smartlearning sudah ada, lakukan update
    const parsedSmartlearningData = JSON.parse(smartlearningData)
    const existingAnswerIndex = parsedSmartlearningData.jawaban.findIndex(
      (answer: { no: number }) => answer.no === noSoal,
    )
    if (existingAnswerIndex !== -1) {
      // Jika jawaban untuk nomor soal tersebut sudah ada, update jawaban
      parsedSmartlearningData.jawaban[existingAnswerIndex].jawab = item?.id
    } else {
      // Jika jawaban untuk nomor soal tersebut belum ada, tambahkan jawaban baru
      parsedSmartlearningData.jawaban.push({
        no: noSoal,
        jawab: item?.id,
      })
    }
    // Simpan kembali data yang telah diperbarui ke localStorage
    localStorage.setItem(
      'smartlearning',
      JSON.stringify(parsedSmartlearningData),
    )
  }
}

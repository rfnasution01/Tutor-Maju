import { BiodataPribadiType } from '@/libs/interface/biodataType'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: BiodataPribadiType = {
  nisn: '0000000001',
  nama: 'John',
  jk: 'L',
  agama: 'Islam',
  tanggal_lahir: '2020-12-03',
  email: 'johndoe@gmail.com',
  wa: '00000000',
}

const stateBiodataPribadiSlice = createSlice({
  name: 'biodataPribadi',
  initialState,
  reducers: {
    setStateBiodataPribadi: (
      state,
      action: PayloadAction<BiodataPribadiType>,
    ) => {
      const { nisn, nama, jk, agama, tanggal_lahir, email, wa } = action.payload
      state.nisn = nisn
      state.nama = nama
      state.jk = jk
      state.email = email
      state.agama = agama
      state.tanggal_lahir = tanggal_lahir
      state.wa = wa
    },
  },
})

export const { setStateBiodataPribadi } = stateBiodataPribadiSlice.actions

export const getBiodataPribadiSlice = (state: {
  stateBiodataPribadi: BiodataPribadiType
}) => state.stateBiodataPribadi

export default stateBiodataPribadiSlice.reducer

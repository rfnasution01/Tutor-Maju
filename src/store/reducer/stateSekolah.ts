import { BiodataSekolahType } from '@/libs/interface/biodataType'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: BiodataSekolahType = {
  id: '0000000001',
  npsn: '00001',
  nama: 'Akademi Ninja Konoha',
}

const stateBiodataSekolahSlice = createSlice({
  name: 'biodataSekolah',
  initialState,
  reducers: {
    setStateBiodataSekolah: (
      state,
      action: PayloadAction<BiodataSekolahType>,
    ) => {
      const { id, npsn, nama } = action.payload
      state.id = id
      state.nama = nama
      state.npsn = npsn
    },
  },
})

export const { setStateBiodataSekolah } = stateBiodataSekolahSlice.actions

export const getBiodataSekolahSlice = (state: {
  stateBiodataSekolah: BiodataSekolahType
}) => state.stateBiodataSekolah

export default stateBiodataSekolahSlice.reducer

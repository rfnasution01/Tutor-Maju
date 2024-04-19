import { IdentitasDataType } from '@/libs/interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IdentitasDataType = {
  nama_aplikasi: 'CBT',
  instansi: 'Smart Learning',
  logo: 'https://cbt.smartlearning.id/assets/img/no-image.png',
  favicon: 'https://cbt.smartlearning.id/assets/img/pmb.png',
  yt: null,
  fb: null,
  ig: null,
  wa: null,
  tw: '',
  email: null,
  website: null,
  alamat: null,
  footer: null,
  deskripsi: null,
  keyword: null,
}

const stateIdentitasSlice = createSlice({
  name: 'identitas',
  initialState,
  reducers: {
    setStateIdentitas: (state, action: PayloadAction<IdentitasDataType>) => {
      const {
        nama_aplikasi,
        instansi,
        logo,
        favicon,
        yt,
        fb,
        ig,
        wa,
        tw,
        email,
        website,
        alamat,
        footer,
        deskripsi,
        keyword,
      } = action.payload
      state.nama_aplikasi = nama_aplikasi
      state.alamat = alamat
      state.deskripsi = deskripsi
      state.email = email
      state.favicon = favicon
      state.fb = fb
      state.footer = footer
      ;(state.ig = ig), (state.instansi = instansi)
      state.keyword = keyword
      state.logo = logo
      state.tw = tw
      state.wa = wa
      state.website = website
      state.yt = yt
    },
  },
})

export const { setStateIdentitas } = stateIdentitasSlice.actions

export const getIdentitasSlice = (state: {
  stateIdentitas: IdentitasDataType
}) => state.stateIdentitas

export default stateIdentitasSlice.reducer

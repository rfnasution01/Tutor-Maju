import { configureStore } from '@reduxjs/toolkit'

import { api } from './api'
import stateIdentitasSlices from './reducer/stateIdentitas.ts'
import stateBiodataPribadiSlices from './reducer/statePribadi.ts'
import stateBiodataSekolahSlices from './reducer/stateSekolah.ts'
import stateSearch from './reducer/stateSearch.ts'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    stateIdentitas: stateIdentitasSlices,
    stateBiodataPribadi: stateBiodataPribadiSlices,
    stateBiodataSekolah: stateBiodataSekolahSlices,
    stateSearch: stateSearch,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

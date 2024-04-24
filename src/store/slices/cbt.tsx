import {
  SoalUjianParams,
  SoalUjianType,
  UjianType,
} from '@/libs/interface/cbtType'
import { Res, api } from '../api'

export const cbtEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getUjian: builder.query<Res<UjianType[]>, void>({
      query: () => ({
        url: 'ujian',
      }),
    }),
    getSoalUjian: builder.query<Res<SoalUjianType[]>, SoalUjianParams>({
      query: ({ id_ujian }) => ({
        url: 'ujian/soal',
        params: {
          id_ujian,
        },
      }),
    }),
  }),
})

export const { useGetUjianQuery, useGetSoalUjianQuery } = cbtEndpoints

import {
  SaveUjianParams,
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
      providesTags: ['ujian'],
    }),
    getSoalUjian: builder.query<Res<SoalUjianType[]>, SoalUjianParams>({
      query: ({ id_ujian }) => ({
        url: 'ujian/soal',
        params: {
          id_ujian,
        },
      }),
    }),
    createSaveJawaban: builder.mutation<void, { data: SaveUjianParams }>({
      query: ({ data }) => ({
        url: `jawaban`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['ujian'],
    }),
    getResetUjian: builder.query<void, SoalUjianParams>({
      query: ({ id_ujian }) => ({
        url: 'ujian/reset',
        params: {
          id_ujian,
        },
      }),
    }),
  }),
})

export const {
  useGetUjianQuery,
  useGetSoalUjianQuery,
  useGetResetUjianQuery,
  useCreateSaveJawabanMutation,
} = cbtEndpoints

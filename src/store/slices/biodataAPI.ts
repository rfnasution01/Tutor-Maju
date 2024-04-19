import { Res, api } from '../api'
import { BiodataType } from '@/libs/interface/biodataType'

export const biodataEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getBiodata: builder.query<Res<BiodataType>, void>({
      query: () => ({
        url: 'biodata',
      }),
    }),
  }),
})

export const { useGetBiodataQuery } = biodataEndpoints

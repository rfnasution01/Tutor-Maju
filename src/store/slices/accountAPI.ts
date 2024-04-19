import { AccountType } from '@/libs/interface'
import { api } from '../api'

export const AccountEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    createAccount: builder.mutation<void, { data: AccountType }>({
      query: ({ data }) => ({
        url: `api/register`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useCreateAccountMutation } = AccountEndpoints

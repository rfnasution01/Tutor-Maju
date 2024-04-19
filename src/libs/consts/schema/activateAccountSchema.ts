import zod from 'zod'

export const activateAccountSchema = zod.object({
  token: zod.string({
    required_error: 'Token harus di isi',
    invalid_type_error: 'Token wa tidak valid',
  }),
  nisn: zod.string({
    required_error: 'NISN harus di isi',
    invalid_type_error: 'Format NISN tidak valid',
  }),
})

import zod from 'zod'

export const registerSchema = zod.object({
  nisn: zod.string({
    required_error: 'NISN harus di isi',
    invalid_type_error: 'Format NISN tidak valid',
  }),
  email: zod
    .string()
    .nonempty({ message: 'Email harus di isi' })
    .email({ message: 'Format email tidak valid' })
    .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
      message: 'Format email tidak valid',
    }),
  nama: zod.string({
    required_error: 'Nama harus di isi',
    invalid_type_error: 'Format nama tidak valid',
  }),
  jk: zod.string({
    required_error: 'Jenis Kelamin harus di isi',
    invalid_type_error: 'Format jenis kelamin tidak valid',
  }),
  agama: zod.string({
    required_error: 'Agama harus di isi',
    invalid_type_error: 'Format agama tidak valid',
  }),
  tanggal_lahir: zod.string({
    required_error: 'Tanggal lahir harus di isi',
    invalid_type_error: 'Format tanggal lahir tidak valid',
  }),
  wa: zod.string({
    required_error: 'WA harus di isi',
    invalid_type_error: 'Format wa tidak valid',
  }),
  password: zod
    .string({
      required_error: 'Password harus di isi',
      invalid_type_error:
        'Format password tidak valid, terdiri dari kombinasi huruf, angka, dan minimal 8 karakter',
    })
    .refine(
      (value) => {
        // Validasi bahwa password harus terdiri dari kombinasi huruf dan angka dan minimal 8 karakter
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value)
      },
      {
        message:
          'Password harus terdiri dari kombinasi huruf dan angka, minimal 6 karakter',
      },
    ),
})

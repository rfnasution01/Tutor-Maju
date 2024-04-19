import zod from 'zod'

export const loginSchema = zod.object({
  username: zod.string({
    required_error: 'NISN harus di isi',
    invalid_type_error: 'Format NISN tidak valid',
  }),

  password: zod
    .string({
      required_error: 'Password harus di isi',
      invalid_type_error:
        'Format password tidak valid, terdiri dari kombinasi huruf, angka, dan minimal 6 karakter',
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

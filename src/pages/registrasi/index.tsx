import { Form } from '@/components/Form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  Search,
  UserCircle,
} from 'lucide-react'
import { Button } from '@/components/Button'
import { useEffect, useState } from 'react'
import { FormLabelInput } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'
import { useCreateAccountMutation } from '@/store/slices/accountAPI'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useGetNISNQuery } from '@/store/slices/loginAPI'
import clsx from 'clsx'
import { registerSchema } from '@/libs/consts/schema/registerSchema'
import { FormListJenisKelamin } from '@/components/ui/form/formListJenisKelamin'
import { FormListAgama } from '@/components/ui/form/formListAgama'

export default function RegistrasiPage() {
  const navigate = useNavigate()
  const [isShow, setIsShow] = useState<boolean>(false)
  const [nisn, setNisn] = useState<string>('')
  const [
    createAccount,
    { isSuccess, isError, error, isLoading: createAccountLoading },
  ] = useCreateAccountMutation()
  const {
    data: getNISN,
    isSuccess: isSuccessNISN,
    isError: isErrorNISN,
    error: errorNISN,
    isFetching,
    isLoading,
  } = useGetNISNQuery(
    { nisn: nisn },
    { skip: nisn === '' || nisn === undefined },
  )
  const disabled = isFetching || isLoading || createAccountLoading

  const form = useForm<zod.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {},
  })

  async function handleFormSignup(values) {
    try {
      await createAccount({ data: values })
    } catch (error) {
      console.log(error)
    }
  }

  async function checkNISN() {
    try {
      const nisn = form.watch('nisn')
      setNisn(nisn)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success(
        `Registrasi berhasil. Silahkan cek email untuk verifikasi login!`,
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        },
      )
      setTimeout(() => {
        navigate('/login/activate-account')
      }, 5000)
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      const errorMsg = error as {
        data?: {
          message?: string
        }
      }

      toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    }
  }, [isError, error])

  useEffect(() => {
    if (isSuccessNISN) {
      toast.success(`NISN valid`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    }
  }, [isSuccessNISN])

  useEffect(() => {
    if (isErrorNISN) {
      const errorMsg = errorNISN as {
        data?: {
          message?: string
        }
      }

      toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    }
  }, [isErrorNISN, errorNISN])

  useEffect(() => {
    if (getNISN?.data) {
      form.setValue('nisn', getNISN?.data?.nisn)
      form.setValue('nama', getNISN?.data?.nama)
      form.setValue('jk', getNISN?.data?.jk)
      form.setValue('agama', getNISN?.data?.agama)
      form.setValue('tanggal_lahir', getNISN?.data?.tanggal_lahir)
      form.setValue('email', getNISN?.data?.email)
      form.setValue('wa', getNISN?.data?.wa)
    }
  }, [getNISN])

  return (
    <div className="flex flex-col gap-y-24">
      <span className="mb-64 font-roboto text-[3rem]">Create an Account</span>
      <Form {...form}>
        <form className="w-full" onSubmit={form.handleSubmit(handleFormSignup)}>
          <div className="flex flex-col gap-y-32 text-black">
            {/* Row 1 */}
            <div className="grid grid-cols-12 gap-x-32">
              <FormLabelInput
                form={form}
                label="NISN"
                placeholder="Write your nisn"
                name="nisn"
                prefix={<UserCircle size={16} />}
                suffix={
                  <div
                    className="flex items-center gap-x-4 rounded-lg bg-blue-500 p-8 text-white hover:cursor-pointer hover:text-background"
                    onClick={checkNISN}
                  >
                    <span className="text-[1.4rem]">Check</span>
                    <span
                      className={clsx('', {
                        'animate-spin duration-100': disabled,
                      })}
                    >
                      {disabled ? <Loader2 size={12} /> : <Search size={12} />}
                    </span>
                  </div>
                }
                type="text"
                className="col-span-6 phones:col-span-12"
                isDisabled={disabled}
              />

              <FormLabelInput
                form={form}
                label="Email"
                placeholder="Write your email"
                name="email"
                prefix={<span>@</span>}
                className="col-span-6 phones:col-span-12"
                isDisabled={disabled}
              />
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-12 gap-x-32">
              <FormLabelInput
                form={form}
                label="Nama"
                placeholder="Write your name"
                name="nama"
                type="text"
                className="col-span-6 phones:col-span-12"
                isDisabled={disabled}
              />

              <FormLabelInput
                form={form}
                label="Tanggal Lahir"
                placeholder="DD-MM-YYYY"
                name="tanggal_lahir"
                type="date"
                className="col-span-6 phones:col-span-12"
                isDisabled={disabled}
              />
            </div>
            {/* Row 3 */}
            <div className="grid grid-cols-12 gap-x-32">
              <FormListJenisKelamin
                name="jk"
                placeholder="Choose your gender"
                headerLabel="Jenis Kelamin"
                form={form}
                className="col-span-6 phones:col-span-12"
                isDisabled={disabled}
              />

              <FormListAgama
                name="agama"
                placeholder="Choose your religion"
                headerLabel="Agama"
                form={form}
                className="col-span-6 phones:col-span-12"
                isDisabled={disabled}
              />
            </div>
            {/* Row 4 */}
            <div className="grid grid-cols-12 gap-x-32">
              <FormLabelInput
                form={form}
                label="WA"
                placeholder="Write your wa number"
                name="wa"
                type="text"
                className="col-span-6 phones:col-span-12"
                isDisabled={disabled}
              />

              <FormLabelInput
                form={form}
                label="Password"
                placeholder="Write your password"
                name="password"
                prefix={<Lock size={16} />}
                suffix={isShow ? <Eye size={16} /> : <EyeOff size={16} />}
                handlerClick={() => setIsShow(!isShow)}
                type={!isShow ? 'password' : 'text'}
                className="col-span-6 phones:col-span-12"
                isDisabled={disabled}
              />
            </div>

            <div className="flex flex-col gap-y-12">
              <Button
                variant="solid"
                bgColor="bg-primary"
                textColor="text-white"
                rounded="rounded-xl"
                type="submit"
                child={
                  <div className="flex items-center justify-center gap-x-8 text-[2rem]">
                    Registrasi
                  </div>
                }
              />
              <span className="text-center">or sign up with:</span>
            </div>

            <div className="flex gap-x-32">
              <Button
                classes="flex-1"
                variant="solid"
                bgColor="bg-white"
                textColor="text-black"
                rounded="rounded-lg"
                child={
                  <div className="flex items-center justify-center gap-x-12">
                    <img src="/icon/Google.svg" alt="Icon Google" />
                    Login with Google
                  </div>
                }
              />
              <Button
                variant="solid"
                bgColor="bg-white"
                textColor="text-black"
                rounded="rounded-lg"
                classes="flex-1"
                child={
                  <div className="flex items-center justify-center gap-x-12">
                    <Mail size={16} />
                    Login with Email
                  </div>
                }
              />
            </div>

            <h5 className="mt-32 text-center">
              Have an account?{' '}
              <span
                className="text-primary-shade-500 hover:cursor-pointer"
                onClick={() => {
                  navigate('/login')
                }}
              >
                Login
              </span>
            </h5>
          </div>
        </form>
        <ToastContainer />
      </Form>
    </div>
  )
}

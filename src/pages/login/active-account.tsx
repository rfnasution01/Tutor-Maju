import { Form } from '@/components/Form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { UserCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { FormLabelInput } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useGetActivateQuery } from '@/store/slices/loginAPI'
import { activateAccountSchema } from '@/libs/consts/schema/activateAccountSchema'
import { Button } from '@/components/Button'

export default function ActivateAccountPage() {
  const navigate = useNavigate()
  const [token, setToken] = useState<string>('')
  const [nisn, setNisn] = useState<string>('')
  const {
    data: getActivate,
    isSuccess,
    isError,
    error,
    isFetching,
    isLoading,
  } = useGetActivateQuery(
    { token, nisn },
    { skip: token === '' || nisn === '' },
  )
  const disabled = isFetching || isLoading

  const form = useForm<zod.infer<typeof activateAccountSchema>>({
    resolver: zodResolver(activateAccountSchema),
    defaultValues: {},
  })

  async function handleSubmit(values) {
    try {
      setToken(values.token)
      setNisn(values?.nisn)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Akun berhasil diverifikasi! Silahkan login`, {
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
      setTimeout(() => {
        navigate('/login')
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

  console.log({ getActivate })

  return (
    <div className="flex flex-col gap-y-24">
      <span className="font-roboto text-[3rem]">Activate Account</span>
      <Form {...form}>
        <form className="w-full" onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="flex flex-col gap-32 text-black">
            <FormLabelInput
              form={form}
              label="NISN"
              placeholder="Write your nisn"
              name="nisn"
              prefix={<UserCircle size={16} />}
              type="text"
              className="col-span-6 phones:col-span-12"
              isDisabled={disabled}
            />
            <FormLabelInput
              form={form}
              label="Token"
              placeholder="Write your token"
              name="token"
              prefix={<UserCircle size={16} />}
              type="text"
              className="col-span-6 phones:col-span-12"
              isDisabled={disabled}
            />

            <Button
              variant="solid"
              bgColor="bg-primary"
              textColor="text-white"
              rounded="rounded-xl"
              type="submit"
              child={
                <div className="flex items-center justify-center gap-x-8 text-[2rem]">
                  Activate
                </div>
              }
            />

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

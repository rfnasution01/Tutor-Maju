import { Form } from '@/components/Form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Eye, EyeOff, Lock, Mail, UserCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { FormLabelInput } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useCreateLoginMutation } from '@/store/slices/loginAPI'
import Cookies from 'js-cookie'
import { loginSchema } from '@/libs/consts/schema/loginSchema'
import { Button } from '@/components/Button'

export default function LoginPage() {
  const navigate = useNavigate()
  const [isShow, setIsShow] = useState<boolean>(false)
  const [createLogin, { isSuccess, isError, error, isLoading }] =
    useCreateLoginMutation()
  const disabled = isLoading

  const form = useForm<zod.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {},
  })

  async function handleFormLogin(values) {
    try {
      const res = await createLogin({ data: values })
      if ('data' in res) {
        const token = res?.data?.data?.token
        Cookies.set('token', token)
      } else {
        console.error('Error occurred:', res.error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Login berhasil!`, {
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
        navigate('/app')
      }, 3000)
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

  return (
    <div className="flex flex-col gap-y-24">
      <span className="font-roboto text-[3rem]">Sign in</span>
      <Form {...form}>
        <form className="w-full" onSubmit={form.handleSubmit(handleFormLogin)}>
          <div className="flex flex-col gap-y-32 text-black">
            <FormLabelInput
              form={form}
              placeholder="Write your username"
              name="username"
              prefix={<UserCircle size={16} />}
              type="text"
              className="col-span-6 phones:col-span-12"
              isDisabled={disabled}
            />

            <FormLabelInput
              form={form}
              placeholder="Write your password"
              name="password"
              prefix={<Lock size={16} />}
              suffix={isShow ? <Eye size={16} /> : <EyeOff size={16} />}
              handlerClick={() => setIsShow(!isShow)}
              type={!isShow ? 'password' : 'text'}
              className="col-span-6 phones:col-span-12"
              isDisabled={disabled}
            />

            <div className="flex items-center justify-between text-[2rem]">
              <div className="flex items-center gap-x-8">
                <input type="checkbox" className="hover:cursor-pointer" />
                <span>Remember Me</span>
              </div>
              <span
                className="hover:cursor-pointer hover:text-primary-shade-500"
                onClick={() => {
                  navigate('')
                }}
              >
                Forgot Password?
              </span>
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
                    Login
                  </div>
                }
              />
              <span className="text-center">or login with:</span>
            </div>

            <div className="flex gap-x-32">
              <Button
                classes="flex-1"
                variant="outlined"
                borderColor="border"
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
                variant="outlined"
                borderColor="border"
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

            <div className="mt-32 flex flex-col gap-y-12">
              <h5
                className="text-center hover:cursor-pointer hover:text-primary-shade-500"
                onClick={() => {
                  navigate('activate-account')
                }}
              >
                Activate Account
              </h5>
              <h5 className="text-center">
                Don't have an account?{' '}
                <span
                  className="text-primary-shade-500 hover:cursor-pointer"
                  onClick={() => {
                    navigate('registrasi')
                  }}
                >
                  Registrasi
                </span>
              </h5>
            </div>
          </div>
        </form>
        <ToastContainer />
      </Form>
    </div>
  )
}

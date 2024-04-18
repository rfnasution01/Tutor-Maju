import { ReactNode } from 'react'

export function Button({
  child,
  type = 'button',
  width = 'auto',
  variant = 'outlined',
  bgColor = 'bg-blue-300',
  borderColor = 'border-blue-300',
  textColor = 'text-black',
  rounded = 'rounded-none',
  disabled,
}: {
  disabled?: boolean
  child: ReactNode
  type?: 'button' | 'reset' | 'submit'
  width?: string
  variant?: 'solid' | 'outlined'
  bgColor?: string
  borderColor?: string
  textColor?: string
  rounded?:
    | 'rounded-none'
    | 'rounded'
    | 'rounded-sm'
    | 'rounded-md'
    | 'rounded-lg'
    | 'rounded-xl'
    | 'rounded-2xl'
    | 'rounded-3xl'
    | 'rounded-full'
}) {
  const variants =
    variant === 'solid'
      ? `${bgColor} hover:bg-slate-100 hover:text-black`
      : `border ${borderColor} hover:bg-white hover:text-black hover:border-transparent`

  return (
    <button
      disabled={disabled}
      type={type}
      className={`${width} ${variants} ${rounded} ${textColor} p-12 text-[2rem] disabled:cursor-not-allowed disabled:border-transparent disabled:bg-slate-100 disabled:text-slate-400`}
    >
      {child}
    </button>
  )
}

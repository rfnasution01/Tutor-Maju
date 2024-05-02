import { Link } from 'react-router-dom'

export function LogoTitle({ to = '/' }: { to?: string }) {
  return (
    <Link
      to={to}
      className="flex items-center justify-center text-center font-roboto text-[4rem] tracking-1.5 hover:cursor-pointer"
    >
      <h5 className=" border border-transparent pb-8 text-primary">Tutor</h5>
      <h5 className="border-b-2 border-primary pb-8 text-black">Maju</h5>
    </Link>
  )
}

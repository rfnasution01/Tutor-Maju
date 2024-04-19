import { Link, Outlet } from 'react-router-dom'

export default function LoginLayout() {
  return (
    <div className="scrollbar flex h-full items-center justify-center overflow-y-auto bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      <div className="scrollbar flex h-auto max-h-[85%] w-3/12 flex-col gap-y-64 overflow-y-auto rounded-2xl bg-white p-48 shadow-lg">
        <Link
          to="/"
          className="flex items-center justify-center text-center font-roboto text-[4rem] tracking-1.5 hover:cursor-pointer"
        >
          <h5 className=" border border-transparent pb-8 text-primary">
            Tutor
          </h5>
          <h5 className="border-b-2 border-primary pb-8 text-black">Maju</h5>
        </Link>

        <Outlet />
      </div>
    </div>
  )
}

import { Outlet } from 'react-router-dom'

export default function LoginLayout() {
  return (
    <div className="scrollbar flex h-full items-center justify-center overflow-y-auto bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      <div className="scrollbar flex h-5/6 w-4/12 flex-col gap-y-32 overflow-y-auto rounded-2xl bg-white p-48 shadow-lg">
        <h5 className="text-center font-roboto text-[4rem] tracking-1.5 text-primary">
          Tutor<span className="text-black">Maju</span>
        </h5>
        <Outlet />
      </div>
    </div>
  )
}

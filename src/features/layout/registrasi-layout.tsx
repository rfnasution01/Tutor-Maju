import { Outlet } from 'react-router-dom'

export default function RegistrasiLayout() {
  return (
    <div
      className={`scrollbar relative col-span-4 h-full overflow-auto rounded-2xl hover:shadow-2xl`}
    >
      <img
        src="/img/registrasi-bg.png"
        alt="login"
        className="h-screen w-full rounded-lg object-cover opacity-85"
      />
      <div className="absolute left-0 top-0 h-full w-full">
        <div className="grid h-full grid-cols-12">
          <div className="col-span-6 h-full max-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 p-64">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

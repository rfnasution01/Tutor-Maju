import { Outlet } from "react-router-dom";

export default function RootLayout() {

  return (
    <div className='h-screen scrollbar overflow-y-auto overflow-x-auto'>
      <Outlet />
    </div>
  )
}


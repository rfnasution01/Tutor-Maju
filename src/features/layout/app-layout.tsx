import { Outlet } from "react-router-dom";

export default function AppLayout(){
    return <div className="h-full overflow-scroll scrollbar">
        <Outlet/>
    </div>
}
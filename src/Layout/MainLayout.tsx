import ServerSelectComponent from "@/components/normal/ServerSelectComponent"
import { Outlet } from "react-router"

export default function MainLayout() {
  return (
    <div className=" w-full grid grid-cols-12">
        <div className="col-span-1 border-r flex justify-center">
            <ServerSelectComponent/>
        </div>
        <div className="col-span-11 flex flex-col ">
            <div className="flex justify-center items-center border-b h-12">
                <h1 className="text-center">Server name</h1>
            </div>
            <div className="h-[calc(100vh-3rem)]">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}



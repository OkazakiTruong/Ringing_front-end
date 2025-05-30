import ServerSelectComponent from "@/pages/Home/components/ServerSelectComponent"
import { Outlet } from "react-router"

export default function MainLayout() {
  return (
    <div className=" w-full flex">
        <div className="border-r flex justify-center">
            <ServerSelectComponent/>
        </div>
        <div className="flex flex-col w-full">
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



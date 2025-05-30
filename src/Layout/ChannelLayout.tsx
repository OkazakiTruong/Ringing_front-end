import Channel from "@/pages/Home/Channel";
import { Outlet } from "react-router";

export default function ChannelLayout() {
  return (
    <div className="w-full grid grid-cols-12 h-full">
        <div className="col-span-3 border-r">
            <Channel/>
        </div>
        <div className="col-span-9">
            <Outlet/>
        </div>
    </div>
  )
}

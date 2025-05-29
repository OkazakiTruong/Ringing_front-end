import { Outlet } from "react-router";
import ChannelContent from "./ChannelContent";

export default function Channel() {
  return (
    <div className="w-full grid grid-cols-12 h-full">
        <div className="col-span-3 border-r">
            <ChannelContent/>
        </div>
        <div className="col-span-9">
            <Outlet/>
        </div>
    </div>
  )
}

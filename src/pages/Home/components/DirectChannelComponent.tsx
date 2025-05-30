import { Avatar,AvatarImage,AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Disc2, Plus, User2Icon } from "lucide-react"
export default function DirectChannelComponent() {
  return (
    <div className="p-4">
        <div className="flex gap-2 flex-col">
            <Button variant="outline" className="flex gap-2">
                <User2Icon/>Friends
            </Button>
            <Button variant="outline">
                <Disc2/>
                Discover
            </Button>
        </div>
        <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center justify-between">
                <h2 className="font-bold">Direct Message</h2>
                <Button variant="ghost">
                    <Plus/>
                </Button>
            </div>
            <div className="flex gap-2 items-center hover:bg-gray-100 px-4 py-2 rounded-xl">
                <div className="relative">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="w-3 h-3 rounded-full bg-green-500 absolute bottom-0 right-0 border-2 border-white"></div>
                </div>
                <p className="font-semibold">
                    Anh Trung
                </p>
            </div>
        </div>
    </div>
  )
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import CustomTooltip from "./CustomTooltip"
import CustomMenuBar from "./CustomMenuBar"
import { PlusIcon, GearIcon } from "@radix-ui/react-icons"

const listMenuOption = [
    {content: "Profile", onClick: () => console.log("Edit")},
    {content: "Setting", menubarSeparator: true, onClick: () => console.log("Delete")},
    {content: "Logout", onClick: () => console.log("Delete")},
]

export default function ServerSelectComponent() {

  return (
    <div className="flex flex-col items-center gap-4 max-w-20 h-screen py-6">
        <div className="flex flex-col items-center gap-4 max-w-20 h-[88vh] overflow-y-auto">
            <CustomTooltip content="Direct Message">
                <Button variant="ghost">
                    <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Button>
            </CustomTooltip>

            <CustomTooltip content="New Server">
                <Button variant="outline" size="icon">
                    <PlusIcon/>
                </Button>
            </CustomTooltip>
        </div>
        <div className="flex items-center justify-center border-t gap-4 max-w-20 h-[12vh]">
            <CustomMenuBar listMenuOption={listMenuOption}>
                <GearIcon/>                
            </CustomMenuBar>
        </div>
    </div>
  )
}

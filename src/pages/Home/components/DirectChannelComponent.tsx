import { Button } from "@/components/ui/button";
import { Disc2, Plus, User2Icon } from "lucide-react";
import UserIconComponent from "@/components/normal/UserIconComponent";
export default function DirectChannelComponent() {
  return (
    <div className="p-4">
      <div className="flex gap-2 flex-col">
        <Button variant="outline" className="flex gap-2">
          <User2Icon />
          Friends
        </Button>
        <Button variant="outline">
          <Disc2 />
          Discover
        </Button>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">Direct Message</h2>
          <Button variant="ghost">
            <Plus />
          </Button>
        </div>
        <UserIconComponent />
      </div>
    </div>
  );
}

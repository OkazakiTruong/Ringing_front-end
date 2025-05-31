import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
type Props = {
  userInfo?: {
    id?: string;
    name?: string;
    avatar?: string;
    status?: string;
  };
};
export default function UserIconComponent({ userInfo }: Props) {
  return (
    <div className="flex gap-2 items-center hover:bg-gray-100 px-4 py-2 rounded-xl">
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="w-3 h-3 rounded-full bg-green-500 absolute bottom-0 right-0 border-2 border-white"></div>
      </div>
      <p className="font-semibold">Anh Trung</p>
    </div>
  );
}

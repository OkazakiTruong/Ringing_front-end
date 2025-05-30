import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import AllFriendsComponent from "./components/AllFriendsComponent"
export default function Friends() {
  return (
    <div className="p-4">
       <Tabs defaultValue="all-friends" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="all-friends">All Friends</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="add-new-friends">Add New Friend</TabsTrigger>
        </TabsList>
        <TabsContent value="all-friends"><AllFriendsComponent/></TabsContent>
        <TabsContent value="pending">Change your password here.</TabsContent >
        <TabsContent value="add-new-friends">Change your password here.</TabsContent >
      </Tabs>
    </div>
  )
}

import { useParams } from "react-router"


export default function ChannelContent() {
  const {serverId} = useParams()    
  return (
    <div>ChannelContent {serverId}</div>
  )
}

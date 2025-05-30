import { useParams } from "react-router"
import DirectChannelComponent from "@/pages/Home/components/DirectChannelComponent"
import { SERVER_ID } from "@/consts/index"


export default function Channel() {
  const {serverId} = useParams()    
  return (
    <>
      {serverId === SERVER_ID.DIRECT_MESSAGE && <DirectChannelComponent/>  }
    </>
  )
}

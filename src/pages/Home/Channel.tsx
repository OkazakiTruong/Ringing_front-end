import DirectChannelComponent from "@/pages/Home/components/DirectChannelComponent"
import { SERVER_ID } from "@/consts/index"
import { useMatch } from 'react-router';


export default function Channel() {
  const isDirectChannnle = useMatch(`/${SERVER_ID.DIRECT_MESSAGE}/*`);
  console.log("1234", isDirectChannnle)
  
  return (
    <>
      {isDirectChannnle && <DirectChannelComponent/>  }
    </>
  )
}

import { useParams } from "react-router"

export default function Message() {
  const {messageId} = useParams() 
  return (
    <div>Message {messageId}</div>
  )
}

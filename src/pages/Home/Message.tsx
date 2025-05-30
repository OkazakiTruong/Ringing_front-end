import { useParams } from "react-router"

export default function Message() {
  const {messageId} = useParams() 
  return (
    <div className="p-4">Message {messageId}</div>
  )
}

import { RouterProvider } from "react-router"
import routers from '@/config/router.config'

function App() {

  return (
    <RouterProvider router={routers} />
  )
}

export default App

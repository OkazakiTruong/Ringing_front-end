import MainLayout from "@/Layout/MainLayout";
import Channel from "@/pages/Home/Channel";
import Message from "@/pages/Home/Message";

import {
  createBrowserRouter,
} from "react-router";

const routers = createBrowserRouter([
  {
    path: "",
    element: <MainLayout/>,
    children: [
      {
        path: ":serverId",
        element: <Channel/>,
        children: [
          {
            path: "message/:messageId",
            element: <Message/>,
          },
        ],
      },
    ],
  },
]);

export default routers
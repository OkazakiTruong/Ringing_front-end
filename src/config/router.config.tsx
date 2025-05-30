import ChannelLayout from "@/Layout/ChannelLayout";
import MainLayout from "@/Layout/MainLayout";
import Friends from "@/pages/Home/Friends";
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
        element: <ChannelLayout/>,
        children: [
          {
            path: "message/:messageId",
            element: <Message/>,
          },
          {
            path: "friends",
            element: <Friends/>,
          },
        ],
      },
    ],
  },
]);

export default routers
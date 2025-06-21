import AuthLayout from "@/Layout/AuthLayout";
import ChannelLayout from "@/Layout/ChannelLayout";
import MainLayout from "@/Layout/MainLayout";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import VerifyRegister from "@/pages/Auth/VerifyRegister";
import Friends from "@/pages/Home/Friends";
import Message from "@/pages/Home/Message";

import { createBrowserRouter } from "react-router";

const routers = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "direct-message",
        element: <ChannelLayout />,
        children: [
          {
            path: "message/:messageId",
            element: <Message />,
          },
          {
            path: "friends",
            element: <Friends />,
          },
        ],
      },
      {
        path: "server/:serverId",
        element: <ChannelLayout />,
        children: [
          {
            path: "room/:roomId",
            element: <Message />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    // element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "register/verify",
        element: <VerifyRegister />,
      },
    ],
  },
]);

export default routers;

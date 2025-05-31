import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10 h-screen overflow-auto">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <img src="/img/ringing_logo.svg" alt="logo" className="w-20" />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block border-l">
        <img
          src="/img/riging_login_bg.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover object-left-top dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

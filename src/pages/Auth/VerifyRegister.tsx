import { VerifyForm } from "./components/VerifyForm";

export default function VerifyRegister({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <VerifyForm />
      </div>
    </div>
  );
}

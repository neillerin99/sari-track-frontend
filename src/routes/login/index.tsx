import Wrapper from "@/components/common/Wrapper";
import { Button } from "@/components/ui/button";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
export const Route = createFileRoute("/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  return (
    <section className="h-full bg-linear-to-br from-(--gradient-from) via-(--gradient-via) to-(--gradient-to) transition-colors duration-300  bg-blend-soft-light">
      <Wrapper className="flex flex-col p-4 h-full items-center justify-center relative gap-2">
        <Button
          className="absolute left-0 top-4 cursor-pointer text-(--subtext) flex"
          variant={"ghost"}
          onClick={() =>
            navigate({
              to: "/",
            })
          }
        >
          <ChevronLeft size={10} />
          Back
        </Button>
        <h1 className="font-bold text-2xl">Welcome Back</h1>
        <p className="text-(--subtext)">Sign in to manage your store</p>
        <LoginForm />
      </Wrapper>
    </section>
  );
}

function LoginForm() {
  return (
    <div className="h-fit p-4 lg:w-1/3 w-full rounded-lg flex flex-col items-center bg-white dark:bg-gray-900 shadow-xl mt-5">
      <h2 className="font-bold text-xl">Sign In</h2>
      <form className="w-full mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="flex flex-col gap-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-xs">
              Remember me
            </Label>
          </div>
          <Button className="text-xs cursor-pointer" variant={"link"}>
            Forgot password?
          </Button>
        </div>
        <Button className="w-full cursor-pointer bg-linear-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 hover:from-blue-700 hover:to-cyan-700 dark:hover:from-blue-600 dark:hover:to-cyan-600 text-white font-semibold">
          Sign In
        </Button>
        <p className="text-sm text-(--subtext) text-center">
          Don't have an account?
          <span>
            <Button className="p-0 cursor-pointer px-2" variant={"link"}>
              Sign Up
            </Button>
          </span>
        </p>
      </form>
    </div>
  );
}

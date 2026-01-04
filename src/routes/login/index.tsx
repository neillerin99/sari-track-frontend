import Wrapper from "@/components/common/Wrapper";
import { Button } from "@/components/ui/button";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ChevronLeft, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export const Route = createFileRoute("/login/")({
  component: Login,
});

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),

  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" }),
  rememberMe: z.boolean(),
});

type FormFields = z.infer<typeof loginSchema>;

function Login() {
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
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    control,
  } = useForm<FormFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
    } catch (e) {
      // setError("email", {
      //   message: "This email is already taken",
      // });
      setError("root", {
        message: "Invalid login credentials!",
      });
    }
  };

  return (
    <div className="h-fit p-4 lg:w-1/3 w-full rounded-lg flex flex-col items-center bg-white dark:bg-gray-900 shadow-xl mt-5">
      <h2 className="font-bold text-xl">Sign In</h2>
      {errors.root && (
        <p className="text-red-500 text-sm text-center mt-4">
          {errors.root.message}
        </p>
      )}
      <form
        className="w-full mt-8 flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <Label htmlFor="email">Email</Label>
          <div className="relative mt-4 mb-1 flex">
            <Mail className="absolute top-0 left-2 h-full w-5 text-gray-500" />
            <Input
              {...register("email")}
              id="email"
              placeholder="you@example.com"
              className="pl-10"
            />
          </div>

          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <Label htmlFor="password">Password</Label>
          <div className="relative mt-4 mb-1">
            <Lock className="absolute top-0 left-2 h-full w-5 text-gray-500" />
            <Input
              {...register("password")}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="pr-10 pl-10"
            />
            <Button
              className="absolute top-0 right-0 cursor-pointer"
              size={"icon"}
              variant={"ghost"}
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="text-gray-500" />
              ) : (
                <Eye className="text-gray-500" />
              )}
            </Button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Controller
              name="rememberMe"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkbox
                  id="remember"
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                />
              )}
            />
            <Label htmlFor="remember" className="text-xs">
              Remember me
            </Label>
          </div>
          <Button className="text-xs cursor-pointer" variant={"link"}>
            Forgot password?
          </Button>
        </div>
        <Button
          disabled={isSubmitting}
          className="w-full cursor-pointer bg-linear-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 hover:from-blue-700 hover:to-cyan-700 dark:hover:from-blue-600 dark:hover:to-cyan-600 text-white font-semibold"
        >
          {isSubmitting ? <Spinner /> : "Sign In"}
        </Button>

        <p className="text-sm text-(--subtext) text-center">
          Don't have an account?
          <span>
            <Button
              className="p-0 cursor-pointer px-2"
              variant={"link"}
              type="button"
              onClick={() =>
                navigate({
                  to: "/signup",
                })
              }
            >
              Sign Up
            </Button>
          </span>
        </p>
      </form>
    </div>
  );
}

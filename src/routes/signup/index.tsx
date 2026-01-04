import Wrapper from "@/components/common/Wrapper";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import FileUploadField from "@/features/signup/components/FileUploadField";
import InputField from "@/features/signup/components/InputField";
import { signupSchema, type SignupFormFields } from "@/schemas/signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ChevronLeft, Mail, User, Lock } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";

export const Route = createFileRoute("/signup/")({
  component: Signup,
});

function Signup() {
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
        <div className="flex flex-col w-full items-center mt-10">
          <h1 className="font-bold text-2xl">Create Account</h1>
          <p className="text-(--subtext)">Start managing your store for free</p>
          <SignupForm />
        </div>
      </Wrapper>
    </section>
  );
}

function SignupForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
    watch,
    setValue,
  } = useForm<SignupFormFields>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignupFormFields> = async (data) => {
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
    } catch (error) {
      setError("root", {
        message: "Something went wrong!",
      });
    }
  };

  return (
    <div className="h-fit p-4 lg:w-[40%] w-full rounded-lg flex flex-col items-center bg-white dark:bg-gray-900 shadow-xl mt-5">
      <h2 className="font-bold text-xl">Sign Up</h2>
      {errors.root && (
        <p className="text-red-500 text-sm text-center mt-4">
          {errors.root.message}
        </p>
      )}
      <form
        className="w-full mt-8 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FileUploadField
          watch={watch}
          register={register}
          error={errors.profile}
          setValue={setValue}
          id="profile"
        />
        <div className="flex sm:gap-2 gap-4 sm:flex-row flex-col basis-1/2">
          <InputField
            label={"First Name"}
            id={"firstName"}
            register={register}
            placeholder="Juan"
            icon={<User className="h-full w-5 text-gray-500" />}
            error={errors.firstName}
          />
          <InputField
            label={"Last Name"}
            id={"lastName"}
            register={register}
            placeholder="Dela Cruz"
            icon={<User className="h-full w-5 text-gray-500" />}
            error={errors.lastName}
          />
        </div>
        <InputField
          label={"Email"}
          id={"email"}
          register={register}
          placeholder={"you@example.com"}
          icon={<Mail className="h-full w-5 text-gray-500" />}
          error={errors.email}
        />
        <InputField
          label={"Password"}
          id={"password"}
          register={register}
          placeholder={"••••••••"}
          icon={<Lock className="h-full w-5 text-gray-500" />}
          error={errors.password}
          type="password"
          isPassword={true}
        />
        <InputField
          label={"Confirm Password"}
          id={"confirmPassword"}
          register={register}
          placeholder={"••••••••"}
          icon={<Lock className="h-full w-5 text-gray-500" />}
          error={errors.confirmPassword}
          type="password"
          isPassword={true}
        />
        <Button
          disabled={isSubmitting}
          className="w-full cursor-pointer bg-linear-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 hover:from-blue-700 hover:to-cyan-700 dark:hover:from-blue-600 dark:hover:to-cyan-600 text-white font-semibold"
        >
          {isSubmitting ? <Spinner /> : "Sign In"}
        </Button>
      </form>
      <p className="text-sm text-(--subtext) text-center mt-4">
        Already have an account?
        <span>
          <Button
            className="p-0 cursor-pointer px-2"
            variant={"link"}
            type="button"
            onClick={() =>
              navigate({
                to: "/login",
              })
            }
          >
            Sign In
          </Button>
        </span>
      </p>
    </div>
  );
}

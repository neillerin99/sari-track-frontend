import Wrapper from "@/components/common/Wrapper";
import { Button } from "@/components/ui/button";
import InputField from "@/features/signup/components/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ChevronLeft, Mail } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { email, z } from "zod";

export const Route = createFileRoute("/signup/")({
  component: Signup,
});

const signupSchema = z.object({
  email: z.email({ message: "Please enter a valid email address" }),
});

type FormFields = z.infer<typeof signupSchema>;

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
        <h1 className="font-bold text-2xl">Create Account</h1>
        <p className="text-(--subtext)">Start managing your store for free</p>
        <SignupForm />
      </Wrapper>
    </section>
  );
}

function SignupForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormFields>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data);
  };

  return (
    <div className="h-fit p-4 lg:w-1/3 w-full rounded-lg flex flex-col items-center bg-white dark:bg-gray-900 shadow-xl mt-5">
      <h2 className="font-bold text-xl">Sign Up</h2>
      <form
        className="w-full mt-8 flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          label={"Email"}
          id={"email"}
          register={register}
          placeholder={"you@example.com"}
          icon={<Mail className="h-full w-5 text-gray-500" />}
          error={errors.email}
        />
        <Button
          disabled={isSubmitting}
          className="w-full cursor-pointer bg-linear-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 hover:from-blue-700 hover:to-cyan-700 dark:hover:from-blue-600 dark:hover:to-cyan-600 text-white font-semibold"
        >
          {isSubmitting ? "Loading" : "Sign In"}
        </Button>
      </form>
    </div>
  );
}

import Wrapper from "@/components/common/Wrapper";
import { Button } from "@/components/ui/button";
import Chip from "@/components/ui/chip";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, CircleCheck } from "lucide-react";

export default function Action() {
  const navigate = useNavigate();
  return (
    <div className="min-h-56 items-center py-20  bg-white dark:bg-gray-900 transition-colors duration-300 px-8">
      <Wrapper className="flex flex-col gap-12 items-center">
        <h2 className="sm:text-5xl text-2xl font-bold text-center">
          Ready to Get Started?
        </h2>
        <p className="sm:text-xl text-lg text-(--subtext) text-center lg:w-[55%] w-full">
          Join store owners who are already using this free tool. No payment, no
          trial, no strings attached - just sign up and start managing your
          store!
        </p>
        <div className="flex sm:flex-row flex-col gap-4 justify-center">
          <Button
            className="cursor-pointer px-4 py-6 font-bold text-lg bg-linear-to-r from-(--text-gradient-from) to-(--text-gradient-to) dark:from-(--text-gradient-from) dark:to-(--text-gradient-to) hover:scale-105"
            onClick={() =>
              navigate({
                to: "/about",
              })
            }
          >
            <span className="flex flex-row items-center">
              Start Using for Free
              <ArrowRight className="ml-2 h-6 w-6" />
            </span>
          </Button>
          <Button
            className="cursor-pointer px-4 py-6 font-bold text-lg hover:bg-input/50 border-primary dark:border-primary hover:scale-105"
            variant={"outline"}
            onClick={() =>
              navigate({
                to: "/login",
              })
            }
          >
            Sign In
          </Button>
        </div>
        <div className="flex sm:flex-row flex-col gap-8">
          <Chip className="flex flex-row gap-2 items-center px-0 ">
            <CircleCheck className="text-green-500 font-bold" />
            <p className="text-lg font-normal text-(--subtext)">100% Free</p>
          </Chip>
          <Chip className="flex flex-row gap-2 items-center px-0 ">
            <CircleCheck className="text-green-500 font-bold" />
            <p className="text-lg font-normal text-(--subtext)">
              No Credit Card
            </p>
          </Chip>
          <Chip className="flex flex-row gap-2 items-center px-0 ">
            <CircleCheck className="text-green-500 font-bold" />
            <p className="text-lg font-normal text-(--subtext)">No Ads</p>
          </Chip>
        </div>
      </Wrapper>
    </div>
  );
}

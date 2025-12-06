import Wrapper from "@/components/common/Wrapper";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export default function Action() {
  const navigate = useNavigate();
  return (
    <div className="min-h-56 items-center py-20  bg-white dark:bg-gray-900 transition-colors duration-300 px-8">
      <Wrapper className="flex flex-col gap-7">
        <h2 className="sm:text-5xl text-2xl font-bold text-center">
          Ready to Transform Your Store?
        </h2>
        <p className="sm:text-xl text-lg text-(--subtext) text-center">
          Sign up today—100% free, made to help Filipino store owners grow their
          business.
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
              Get Started for Free
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
      </Wrapper>
    </div>
  );
}

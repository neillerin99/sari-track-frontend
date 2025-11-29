import { useNavigate } from "@tanstack/react-router";
import { Button } from "../ui/button";
import Chip from "../ui/chip";
import Wrapper from "../utils/Wrapper";
import CountUp from "../animation/CountUp";

export default function Hero() {
  return (
    <div className="p-4 h-full bg-linear-to-br from-(--gradient-from) via-(--gradient-via) to-(--gradient-to) transition-colors duration-300 flex-1">
      <Wrapper className="h-full flex sm:flex-row flex-col  items-center justify-start sm:py-0 py-5 sm:gap-5 gap-10">
        <InfoSection />
        <InfoSection />
      </Wrapper>
    </div>
  );
}

function InfoSection() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center h-full gap-7">
      <Chip className="bg-linear-to-r from-(--text-gradient-from) to-(--text-gradient-to) dark:from-(--text-gradient-from) dark:to-(--text-gradient-to)">
        ✨ Mordern POS System
      </Chip>
      <h1 className="text-5xl font-bold ">
        Manage Your
        <span className="bg-linear-to-r from-(--text-gradient-from) to-(--text-gradient-to) dark:from-(--text-gradient-from) dark:to-(--text-gradient-to) bg-clip-text text-transparent">
          {" "}
          Store{" "}
        </span>
        with Ease
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300">
        Complete point of sale and inventory management system designed
        specifically for sari-sari stores. Simple, fast, and powerful.
      </p>
      <div className="flex gap-4">
        <Button
          className="cursor-pointer px-4 py-6 font-bold text-lg bg-linear-to-r from-(--text-gradient-from) to-(--text-gradient-to) dark:from-(--text-gradient-from) dark:to-(--text-gradient-to)"
          onClick={() =>
            navigate({
              to: "/about",
            })
          }
        >
          Start Now
        </Button>
        <Button
          className="cursor-pointer px-4 py-6 font-bold text-lg hover:bg-input/50 border-primary dark:border-primary"
          variant={"outline"}
          onClick={() =>
            navigate({
              to: "/about",
            })
          }
        >
          Watch Demo
        </Button>
      </div>
      <div className="flex gap-8">
        <CountUp target={500} text="+" />
      </div>
    </div>
  );
}

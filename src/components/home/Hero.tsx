import { useNavigate } from "@tanstack/react-router";
import { Button } from "../ui/button";
import Chip from "../ui/chip";
import Wrapper from "../utils/Wrapper";
import CountUp from "../animation/CountUp";
import { Clock, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <div className="p-4 min-h-fit bg-linear-to-br from-(--gradient-from) via-(--gradient-via) to-(--gradient-to) transition-colors duration-300  bg-blend-soft-light">
      <Wrapper className="flex lg:flex-row flex-col  items-center justify-start sm:py-0 py-5 lg:gap-7 md:gap-15 gap-14 lg:my-34 md:my-20 my-14">
        <InfoSection />
        <StatsSection />
      </Wrapper>
    </div>
  );
}

function InfoSection() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center h-full gap-7 flex-1">
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
      <div className="flex sm:gap-15 gap-10">
        <div className="flex flex-col">
          <CountUp target={500} text="+" />
          <p className="text-xs text-gray-700 dark:text-gray-300">
            Active Stores
          </p>
        </div>
        <div className="flex flex-col">
          <CountUp target={50} text="k+" />
          <p className="text-xs text-gray-700 dark:text-gray-300">
            Transactions
          </p>
        </div>
        <div className="flex flex-col">
          <CountUp target={99} text="%" />
          <p className="text-xs text-gray-700 dark:text-gray-300">Uptime</p>
        </div>
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <div className="flex-1 flex items-center justify-center w-full min-h-64 lg:min-h-[400px] rounded-2xl relative bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700">
      <div className="bg-red-500 p-4 rounded-3xl shadow-xl absolute -top-10 -right-4">
        <TrendingUp className="h-10 w-10 " />
      </div>
      <div className="bg-primary p-4 rounded-3xl shadow-xl absolute -bottom-10 -left-5">
        <Clock className="h-10 w-10" />
      </div>
      hello
    </div>
  );
}

import { useNavigate } from "@tanstack/react-router";
import { Button } from "../../../../components/ui/button";
import Chip from "../../../../components/ui/chip";
import Wrapper from "../../../../components/common/Wrapper";
import { Clock, Package, ShoppingCart, TrendingUp, Users } from "lucide-react";
import StatsCard from "../../../../components/ui/stats-card";
import StatsRow from "../../../../components/ui/stats-row";

export default function Hero() {
  return (
    <div className="p-4 min-h-fit bg-linear-to-br from-(--gradient-from) via-(--gradient-via) to-(--gradient-to) transition-colors duration-300  bg-blend-soft-light">
      <Wrapper className="flex lg:flex-row flex-col  items-center justify-start sm:py-0 py-5 lg:gap-7 md:gap-15 gap-14 lg:my-34 md:my-20 my-1">
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
      <Chip className="px-4 py-2 bg-linear-to-r from-(--text-gradient-from) to-(--text-gradient-to) dark:from-(--text-gradient-from) dark:to-(--text-gradient-to)">
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
      <p className="text-xl text-(--subtext)">
        Complete point of sale and inventory management system designed
        specifically for sari-sari stores. Simple, fast, and powerful.
      </p>
      <div className="flex gap-4">
        <Button
          className="cursor-pointer px-4 py-6 font-bold text-lg bg-linear-to-r from-(--text-gradient-from) to-(--text-gradient-to) dark:from-(--text-gradient-from) dark:to-(--text-gradient-to) hover:scale-105"
          onClick={() =>
            navigate({
              to: "/about",
            })
          }
        >
          Start Now
        </Button>
        <Button
          className="cursor-pointer px-4 py-6 font-bold text-lg hover:bg-input/50 border-primary dark:border-primary hover:scale-105"
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
        <StatsCard text="+" target={500} statsText="Active Stores" />
        <StatsCard text="k+" target={50} statsText="Transactions" />
        <StatsCard text="%" target={99} statsText="Uptime" />
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <div className="flex-1 flex items-center justify-center w-full min-h-64 lg:min-h-[400px] rounded-2xl relative bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700">
      <div className="bg-linear-to-r from-(--text-gradient-from) to-(--text-gradient-to) dark:from-(--text-gradient-from) dark:to-(--text-gradient-to) p-4 rounded-3xl shadow-xl absolute -top-10 -right-4">
        <TrendingUp className="h-9 w-9 text-white" />
      </div>
      <div className="flex flex-col w-full px-4 gap-8 h-full py-4">
        <StatsRow className="border border-blue-100 dark:border-blue-800 bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30">
          <StatsRow.Icon className="bg-blue-100 dark:bg-blue-900 ">
            <ShoppingCart className="h-6 w-6" />
          </StatsRow.Icon>
          <StatsRow.Body>
            <p className="text-(--subtext)">Today's Sales</p>
            <h2 className="font-bold text-2xl">₱12,450</h2>
          </StatsRow.Body>
          <StatsRow.Indicator variant={"positive"}>+15%</StatsRow.Indicator>
        </StatsRow>
        <StatsRow className="bg-linear-to-r from-cyan-50 to-sky-50 dark:from-cyan-900/30 dark:to-sky-900/30 border border-cyan-100 dark:border-cyan-800">
          <StatsRow.Icon className="bg-cyan-100 dark:bg-cyan-900">
            <Package className="h-6 w-6" />
          </StatsRow.Icon>
          <StatsRow.Body>
            <p className="text-(--subtext)">Products</p>
            <h2 className="font-bold text-2xl">248</h2>
          </StatsRow.Body>
          <StatsRow.Indicator variant={"warning"}>12 low</StatsRow.Indicator>
        </StatsRow>
        <StatsRow className="bg-linear-to-r from-sky-50 to-blue-50 dark:from-sky-900/30 dark:to-blue-900/30 border border-sky-100 dark:border-sky-800">
          <StatsRow.Icon className="bg-sky-100 dark:bg-sky-900">
            <Users className="h-6 w-6" />
          </StatsRow.Icon>
          <StatsRow.Body>
            <p className="text-(--subtext)">Customers</p>
            <h2 className="font-bold text-2xl">156</h2>
          </StatsRow.Body>
          <StatsRow.Indicator variant={"positive"}>+8</StatsRow.Indicator>
        </StatsRow>
      </div>

      <div className="bg-linear-to-r from-(--text-gradient-from) to-(--text-gradient-to) dark:from-(--text-gradient-from) dark:to-(--text-gradient-to) p-4 rounded-3xl shadow-xl absolute -bottom-10 -left-5">
        <Clock className="h-9 w-9 text-white" />
      </div>
    </div>
  );
}

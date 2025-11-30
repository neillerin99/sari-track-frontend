import CountUp, { type CountUpProps } from "../animation/CountUp";

interface StatsCardProps extends CountUpProps {
  statsText?: string;
}

export default function StatsCard({
  statsText,
  target = 100,
  text = "",
}: StatsCardProps) {
  return (
    <div className="flex flex-col">
      <CountUp target={target} text={text} />
      <p className="text-xs text-gray-700 dark:text-gray-300">{statsText}</p>
    </div>
  );
}

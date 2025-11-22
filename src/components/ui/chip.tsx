import { cn } from "@/lib/utils";

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Chip({ className, ...props }: ChipProps) {
  return (
    <div
      className={cn(
        "px-4 py-2 rounded-full text-center font-bold text-white w-fit",
        className
      )}
      {...props}
    />
  );
}

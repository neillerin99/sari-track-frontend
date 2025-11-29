import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

export default function StatsRow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full h-24 border border-primary rounded-xl p-4 flex items-center gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

StatsRow.Icon = function StatsRowIcon({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("bg-primary p-2 rounded-sm", className)}>{children}</div>
  );
};

StatsRow.Body = function StatsRowBody({ children }: { children: ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
};

const indicatorVariants = cva("ml-auto font-medium", {
  variants: {
    variant: {
      positive: "text-green-500",
      negative: "text-red-500",
      neutral: "text-gray-500 dark:text-gray-400",
      warning: "text-yellow-500",
    },
  },
  defaultVariants: {
    variant: "positive",
  },
});

StatsRow.Indicator = function StatsRowIndicator({
  children,
  variant,
}: { children: ReactNode } & VariantProps<typeof indicatorVariants>) {
  return <p className={cn(indicatorVariants({ variant }))}>{children}</p>;
};

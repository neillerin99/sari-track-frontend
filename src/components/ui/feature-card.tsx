import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export default function FeatureCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-linear-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 w-full sm:h-60 h-full hover:shadow-xl hover:scale-101 transition p-7 flex flex-col gap-4 rounded-2xl sm:items-start items-center",
        className
      )}
    >
      {children}
    </div>
  );
}

FeatureCard.Icon = function FeatureCardIcon({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-linear-to-br from-blue-500 to-cyan-600 dark:from-blue-600 dark:to-cyan-500 w-fit p-4 rounded-xl",
        className
      )}
    >
      {children}
    </div>
  );
};

FeatureCard.Header = function FeatureCardHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("font-bold text-2xl text-center", className)}>
      {children}
    </h2>
  );
};

FeatureCard.Subheader = function FeatureCardSubheader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-(--subtext) text-lg text-center", className)}>
      {children}
    </p>
  );
};

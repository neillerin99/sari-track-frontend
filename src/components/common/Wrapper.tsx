import { cn } from "@/lib/utils";
import type React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div className={cn("w-full max-w-7xl mx-auto px-4", className)}>
      {children}
    </div>
  );
}

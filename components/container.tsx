import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export const Container = ({
  children,
  className,
  as: Component = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
}) => {
  return (
    <Component className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Component>
  );
};

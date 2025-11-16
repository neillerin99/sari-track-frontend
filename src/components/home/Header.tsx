import { useNavigate } from "@tanstack/react-router";
import { Button } from "../ui/button";
import ThemeToggle from "../utils/ThemeToggle";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="h-14 bg-background flex items-center justify-between p-4">
      <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
        SariTrack
      </span>
      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
        <Button
          className="cursor-pointer"
          variant={"ghost"}
          onClick={() =>
            navigate({
              to: "/about",
            })
          }
        >
          Login
        </Button>
        <Button
          className="cursor-pointer"
          onClick={() =>
            navigate({
              to: "/about",
            })
          }
        >
          Get Started
        </Button>
      </div>
    </header>
  );
}

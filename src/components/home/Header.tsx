import { useNavigate } from "@tanstack/react-router";
import { Button } from "../ui/button";
import ThemeToggle from "../utils/ThemeToggle";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="h-14 bg-background flex items-center justify-center p-4 w-full">
      <div className="w-full max-w-7xl flex items-center">
        <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
          SariTrack
        </span>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <div className="sm:flex hidden">
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
          <div className="sm:hidden block">
            <Sheet>
              <SheetTrigger>
                <Menu className="cursor-pointer" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

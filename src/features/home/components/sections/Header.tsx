import { useNavigate } from "@tanstack/react-router";
import { Button } from "../../../../components/ui/button";
import ThemeToggle from "../../../../components/common/ThemeToggle";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Wrapper from "../../../../components/common/Wrapper";

export default function Header() {
  const navigate = useNavigate();
  return (
    <nav className="h-18 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md flex items-center justify-center w-full sticky top-0 z-1 border-b border-blue-100 dark:border-gray-800">
      <Wrapper className="flex items-center ">
        <span className="text-2xl font-bold bg-linear-to-r from-(--text-gradient-from) to-(--text-gradient-to) dark:from-(--text-gradient-from) dark:to-(--text-gradient-to) bg-clip-text text-transparent">
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
                  to: "/login",
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
          <MobileSheet />
        </div>
      </Wrapper>
    </nav>
  );
}

function MobileSheet() {
  const navigate = useNavigate();
  return (
    <div className="sm:hidden block">
      <Sheet>
        <SheetTrigger>
          <Menu className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                SariTrack
              </span>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col">
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
        </SheetContent>
      </Sheet>
    </div>
  );
}

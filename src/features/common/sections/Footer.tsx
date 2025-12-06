import Wrapper from "@/components/common/Wrapper";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="min-h-40 bg-gray-900 dark:bg-black text-white transition-colors duration-300 w-full flex items-center">
      <Wrapper className="flex flex-col">
        <div className="flex justify-between">
          <Button
            className="text-2xl font-bold bg-linear-to-r from-(--text-gradient-from) to-(--text-gradient-to) dark:from-(--text-gradient-from) dark:to-(--text-gradient-to) bg-clip-text text-transparent cursor-pointer"
            onClick={() =>
              navigate({
                to: "/",
              })
            }
          >
            SariTrack
          </Button>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Neil Edriane Lerin. All rights
            reserved.
          </p>
        </div>
      </Wrapper>
    </footer>
  );
}

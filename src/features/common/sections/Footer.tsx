import Wrapper from "@/components/common/Wrapper";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { CodeXml, Coffee, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="min-h-40 bg-gray-900 dark:bg-black text-white transition-colors duration-300 w-full">
      <Wrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        <div className="flex flex-col items-start gap-4">
          <Button
            className="text-2xl font-bold bg-linear-to-r from-(--text-gradient-from) to-(--text-gradient-to) dark:from-(--text-gradient-from) dark:to-(--text-gradient-to) bg-clip-text text-transparent cursor-pointer p-0"
            onClick={() =>
              navigate({
                to: "/",
              })
            }
          >
            SariTrack
          </Button>
          <p className="sm:text-sm text-md">
            Modern POS and inventory management system designed for Filipino
            sari-sari stores. 100% free, forever.
          </p>
          <span className="flex gap-2 items-center text-xs">
            <Coffee size={20} />
            Made with love and coffee
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="flex flex-row gap-2 items-center font-bold text-xl">
            <CodeXml className="text-blue-400" size={20} />
            Developer
          </span>
          <p className="text-sm text-[--subtext]">
            Built by a passionate developer who loves creating tools for small
            businesses.
          </p>
          <div className="flex gap-2">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Neil Edriane Lerin. All rights
            reserved.
          </p>
        </div>
      </Wrapper>
    </footer>
  );
}

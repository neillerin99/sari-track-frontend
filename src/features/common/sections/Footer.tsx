import Wrapper from "@/components/common/Wrapper";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import { CodeXml, Coffee, User } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="min-h-40 bg-gray-900 dark:bg-black text-white transition-colors duration-300 w-full">
      <Wrapper className=" flex flex-col gap-4 py-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
            <p className="sm:text-sm text-md text-gray-400">
              Modern POS and inventory management system designed for Filipino
              sari-sari stores. 100% free, forever.
            </p>
            <span className="flex gap-2 items-center text-xs text-gray-400">
              <Coffee size={20} />
              Made with love and coffee
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="flex flex-row gap-2 items-center font-bold text-xl">
              Quick Links
            </h2>
            <Link to={"/"} className="text-sm text-gray-400">
              Home
            </Link>
            <Link to={"/login"} className="text-sm text-gray-400">
              Login
            </Link>
            <Link to={"/login"} className="text-sm text-gray-400">
              Get Started
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="flex flex-row gap-2 items-center font-bold text-xl">
              <CodeXml className="text-blue-400" size={20} />
              Developer
            </span>
            <p className="text-sm text-gray-400">
              Built by a passionate developer who loves creating tools for small
              businesses.
            </p>
            <div className="flex gap-2 ">
              <a
                href="https://github.com/neillerin99"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
              >
                <SiGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/neil-edriane-lerin/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://neil-lerin.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
              >
                <User className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="flex flex-row gap-2 items-center font-bold text-xl">
              Get in Touch
            </h2>
            <a
              href="mailto:saritrack.mailer@gmail.com"
              className="text-sm text-gray-400"
            >
              saritrack.support@gmail.com
            </a>
          </div>
        </div>

        <hr className="w-full " />
        <div>
          <p className="text-sm text-center text-gray-400">
            &copy; {new Date().getFullYear()} Neil Edriane Lerin. All rights
            reserved.
          </p>
        </div>
      </Wrapper>
    </footer>
  );
}

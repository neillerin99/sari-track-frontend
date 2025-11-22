import Chip from "../ui/chip";
import Wrapper from "../utils/Wrapper";

export default function Hero() {
  return (
    <div className="p-4 h-full bg-linear-to-br from-(--gradient-from) via-(--gradient-via) to-(--gradient-to) transition-colors duration-300 flex-1">
      <Wrapper className="h-full flex items-center justify-start">
        <InfoSection />
        <InfoSection />
      </Wrapper>
    </div>
  );
}

function InfoSection() {
  return (
    <div className="flex flex-col justify-center h-full ">
      <Chip className="bg-linear-to-r from-(--text-gradient-from) to-(--text-gradient-to) dark:from-(--text-gradient-from) dark:to-(--text-gradient-to)">
        ✨ Mordern POS System
      </Chip>
      <h1 className="text-5xl font-bold my-10">
        Manage Your
        <span className="bg-linear-to-r from-(--text-gradient-from) to-(--text-gradient-to) dark:from-(--text-gradient-from) dark:to-(--text-gradient-to) bg-clip-text text-transparent">
          {" "}
          Store{" "}
        </span>
        with Ease
      </h1>
      hello world
    </div>
  );
}

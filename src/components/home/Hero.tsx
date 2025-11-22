import Wrapper from "../utils/Wrapper";

export default function Hero() {
  return (
    <div className="p-4 h-full bg-linear-to-br from-(--gradient-from) via-(--gradient-via) to-(--gradient-to) transition-colors duration-300">
      <Wrapper className="h-full flex items-center justify-start ">
        hello world
      </Wrapper>
    </div>
  );
}

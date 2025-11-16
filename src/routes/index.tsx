import Header from "@/components/home/Header";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="text-center flex flex-col">
      <Header />
      <button className="bg-primary text-primary-foreground hover:bg-primary/90">
        Click Me
      </button>
      <Button className="cursor-pointer" variant={"outline"}>
        Click Me
      </Button>
      hello world
    </div>
  );
}

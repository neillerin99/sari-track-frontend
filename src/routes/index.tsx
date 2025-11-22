import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="bg-background min-h-full items-center overflow-auto">
      <div className="bg-background w-full flex flex-col h-full">
        <Header />
        <Hero />
      </div>
      <div className="h-20 bg-yellow-500"></div>
    </div>
  );
}

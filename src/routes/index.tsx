import Feature from "@/features/home/components/Feature";
import Header from "@/features/home/components/Header";
import Hero from "@/features/home/components/Hero";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <section className="bg-gradient-from min-h-full items-center">
      <Header />
      <Hero />
      <Feature />
      asd asd asdasd asd
      <div className="h-20 bg-yellow-500"></div>
    </section>
  );
}

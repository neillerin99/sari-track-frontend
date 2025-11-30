import Feature from "@/components/home/Feature";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
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

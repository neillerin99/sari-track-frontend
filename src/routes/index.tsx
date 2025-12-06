import Action from "@/features/home/components/sections/Action";
import Benefits from "@/features/home/components/sections/Benefits";
import Feature from "@/features/home/components/sections/Feature";
import Footer from "@/features/home/components/sections/Footer";
import Header from "@/features/home/components/sections/Header";
import Hero from "@/features/home/components/sections/Hero";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "SariTrack",
        content: "Manage your Sari Sari store!",
      },
      {
        title: "SariTrack",
      },
    ],
  }),
  component: App,
});

function App() {
  return (
    <section className="bg-gradient-from min-h-full items-center">
      <Header />
      <Hero />
      <Feature />
      <Benefits />
      <Action />
      <Footer />
    </section>
  );
}

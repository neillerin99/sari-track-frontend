import Action from "@/features/home/components/sections/Action";
import Benefits from "@/features/home/components/sections/Benefits";
import Feature from "@/features/home/components/sections/Feature";
import Hero from "@/features/home/components/sections/Hero";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(landing)/")({
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
    <>
      <Hero />
      <Feature />
      <Benefits />
      <Action />
    </>
  );
}

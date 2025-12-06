import Header from "@/features/common/sections/Header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col">
      <Header />
      Hello login page
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/join-us/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/about/join-us/"!</div>;
}

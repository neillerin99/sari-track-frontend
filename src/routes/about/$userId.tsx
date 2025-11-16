import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/$userId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/about/$userId"!</div>;
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(landing)/contact-us/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(landing)/contact-us/"!</div>;
}

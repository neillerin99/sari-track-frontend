import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/items/")({
  component: ItemComponent,
});

function ItemComponent() {
  return <div>Hello "/dashboard/items/"!</div>;
}

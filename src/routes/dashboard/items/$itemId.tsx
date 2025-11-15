import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/items/$itemId")({
  component: RouteComponent,
  loader: async ({ params }) => {
    return {
      itemId: params.itemId,
    };
  },
});

function RouteComponent() {
  const { itemId } = Route.useParams();
  return <div>Hello {itemId}</div>;
}

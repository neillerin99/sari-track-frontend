import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/about/join-us")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-full ">
      <aside className="bg-yellow-400">hello hello</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: RootDashbaord,
});

function RootDashbaord() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-200 p-4 flex flex-col">
        Sidebar
        <Link to={"/dashboard/items"}>Items</Link>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

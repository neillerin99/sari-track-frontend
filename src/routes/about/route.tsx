import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutLayout,
});

function AboutLayout() {
  return (
    <div className="flex flex-col min-h-full">
      <div className="h-20 bg-red-500">Header</div>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="h-20 bg-amber-700">Footer</footer>
    </div>
  );
}

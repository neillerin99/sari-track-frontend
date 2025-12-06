import Footer from "@/features/common/sections/Footer";
import Header from "@/features/common/sections/Header";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(landing)")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="bg-gradient-from min-h-full items-center flex flex-col">
      <Header />
      <div className="flex-1 w-full">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
}

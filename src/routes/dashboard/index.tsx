import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/dashboard/header";
import z from "zod";

const searchSchema = z.object({
  page: z.number().catch(1),
  query: z.number().catch(1),
});

export const Route = createFileRoute("/dashboard/")({
  component: Dashboard,
  validateSearch: searchSchema,
  loaderDeps: ({ search }) => ({ search }),
  loader: async ({ deps }) => {
    const itemsId = [1, 2, 3, 4, 5, 6, 7, 8, 10];
    // use this to call from backend deps.search.query
    return {
      items: itemsId.filter((item) => item == deps.search.query),
    };
  },
});

function Dashboard() {
  const { page } = Route.useSearch();
  const { items } = Route.useLoaderData();
  return (
    <div className="flex flex-col">
      <Header />
      <h2>Page {page}</h2>
      <div className="flex flex-col">
        {items.map((item) => (
          <Link
            key={item}
            to={"/dashboard/items/$itemId"}
            params={{ itemId: item as unknown as string }}
          >
            Item {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

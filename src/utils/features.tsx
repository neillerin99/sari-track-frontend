import {
  ChartNoAxesCombined,
  Package,
  Shield,
  ShoppingCart,
  User,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";

export interface Feature {
  icon: ReactNode;
  header: string;
  subHeader: string;
}

export const features: Array<Feature> = [
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    header: "Point of Sale",
    subHeader: "Fast and intuitive POS system for quick transactions",
  },
  {
    icon: <Package className="h-8 w-8" />,
    header: "Inventory Management",
    subHeader: "Track stock levels and batch expiration dates",
  },
  {
    icon: <User className="h-8 w-8" />,
    header: "Customer Management",
    subHeader: "Manage customer credits and purchase history",
  },
  {
    icon: <ChartNoAxesCombined className="h-8 w-8" />,
    header: "Sales Reports",
    subHeader: "Detailed analytics and insights for your business",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    header: "Fast & Efficient",
    subHeader: "Optimized for speed and ease of use",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    header: "Secure & Reliable",
    subHeader: "Your data is safe and always accessible",
  },
];

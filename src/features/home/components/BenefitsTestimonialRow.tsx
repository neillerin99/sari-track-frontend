import { Store } from "lucide-react";
import type { BenefitTestimonial } from "../../../models/Testimonial";

export default function BenefitsTestimonialRow({
  storeName,
  testimonial,
}: BenefitTestimonial) {
  return (
    <div className="flex sm:flex-row flex-col gap-4">
      <div className="bg-white/20 dark:bg-white/10 w-fit p-3 rounded-xl text-white h-fit">
        <Store className="h-8 w-8" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">{storeName}</h2>
        <p>{testimonial}</p>
      </div>
    </div>
  );
}

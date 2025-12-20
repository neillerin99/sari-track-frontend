import Wrapper from "@/components/common/Wrapper";
import { benefits } from "../../utils/benefits";
import { testimonials } from "../../utils/testimonial";
import type { BenefitTestimonial } from "../../../../models/Testimonial";
import BenefitsTestimonialRow from "../ui/BenefitsTestimonialRow";
import Chip from "@/components/ui/chip";
import { CircleCheck } from "lucide-react";
import SlideAnimation from "@/components/animation/SlideAnimation";

export default function Benefits() {
  return (
    <div className="bg-linear-to-br from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 text-white transition-colors duration-300 min-h-fit py-20 px-4">
      <SlideAnimation>
        <Wrapper className="flex lg:flex-row flex-col  items-center justify-start sm:py-0 py-5 lg:gap-7 md:gap-15 gap-14 h-full">
          <BenefitHighlights />
          <BenefitTestimonials />
        </Wrapper>
      </SlideAnimation>
    </div>
  );
}

function BenefitHighlights() {
  return (
    <div className="h-full flex-1 flex flex-col gap-6">
      <h2 className="sm:text-4xl text-3xl font-bold sm:text-start text-center">
        Why Store Owners Love Us
      </h2>
      <p className="sm:text-xl text-lg text-blue-100 dark:text-cyan-100 mb-6">
        Join hundreds of sari-sari store owners who have transformed their
        business with our system
      </p>
      {benefits.map((benefit: string, index) => (
        <SlideAnimation key={index}>
          <Chip className="flex flex-row gap-2 items-center px-0 ">
            <CircleCheck className="text-green-500 font-bold" />
            <p className="text-lg font-normal">{benefit}</p>
          </Chip>
        </SlideAnimation>
      ))}
    </div>
  );
}

function BenefitTestimonials() {
  return (
    <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg min-h-64 lg:min-h-[400px] flex-1 w-full rounded-xl p-8 flex flex-col justify-between gap-10">
      {testimonials.map((testimonial: BenefitTestimonial, index) => (
        <BenefitsTestimonialRow
          key={index}
          storeName={testimonial.storeName}
          testimonial={testimonial.testimonial}
        />
      ))}
    </div>
  );
}

import Wrapper from "@/components/common/Wrapper";
import FeatureCard from "../../../components/ui/feature-card";
import { features, type Feature } from "@/features/home/utils/features";

export default function Feature() {
  return (
    <section className=" min-h-56 items-center py-20  bg-white dark:bg-gray-900 transition-colors duration-300 px-8">
      <Wrapper className="flex flex-col gap-5">
        <h2 className="sm:text-4xl text-3xl font-bold text-center">
          Everything You Need to Run Your Store
        </h2>
        <p className="sm:text-xl text-lg text-(--subtext) text-center">
          Powerful features designed to make your daily operations smooth and
          efficient
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {features.map((feature: Feature) => (
            <FeatureCard>
              <FeatureCard.Icon>{feature.icon}</FeatureCard.Icon>
              <FeatureCard.Header>{feature.header}</FeatureCard.Header>
              <FeatureCard.Subheader>{feature.subHeader}</FeatureCard.Subheader>
            </FeatureCard>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}

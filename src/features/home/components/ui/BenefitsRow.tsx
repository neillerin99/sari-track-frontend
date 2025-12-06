import { CircleCheck } from "lucide-react";

export default function BenefitsRow({ text }: { text: string }) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <CircleCheck className="text-green-500 font-bold" />
      <p className="text-lg">{text}</p>
    </div>
  );
}

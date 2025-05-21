import Image from "next/image";
import Hero from "@/components/Hero";
import Enroll from "@/components/enroll";
import ProgramBenefits from "@/components/programbenefits";
import StepToday from "@/components/StepToday";

export default function Home() {
  return (
    <div>
      <Hero />
      <Enroll />
      <ProgramBenefits />
      <StepToday />
    </div>
  );
}

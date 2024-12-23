import { ProblemSection } from './problem-section';
import { SolutionTransition } from './solution-transition';
import { SolutionSection } from './solution-section';

export function PASSection() {
  return (
    <section className="relative bg-[#030712] py-16 sm:py-20 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-20 sm:space-y-32">
        <ProblemSection />
        <SolutionTransition />
        <SolutionSection />
      </div>
    </section>
  );
}
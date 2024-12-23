import { ProblemPoints } from './problem-points';

export function ProblemSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900 to-gray-900/50 blur-3xl" />
      </div>

      <div className="relative">
        <ProblemPoints />
      </div>
    </div>
  );
}
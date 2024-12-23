import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { PRICING_TIERS } from './constants';

interface PricingSliderProps {
  value: number;
  onChange: (value: number) => void;
}

type PricingTier = {
  templates: number;
  price: number;
  label: string;
};

export function PricingSlider({ value, onChange }: PricingSliderProps) {
  // Find nearest tier for any value
  const getNearestTier = (val: number): PricingTier => {
    const allTiers = Object.values(PRICING_TIERS).flat();
    return allTiers.reduce((prev, curr) => 
      Math.abs(curr.templates - val) < Math.abs(prev.templates - val) ? curr : prev
    );
  };

  const handleChange = (newValue: number[]) => {
    const nearestTier = getNearestTier(newValue[0]);
    onChange(nearestTier.templates);
  };

  const currentTier = getNearestTier(value);

  return (
    <div className="w-full max-w-xl mx-auto space-y-8">
      {/* Tier Markers */}
      <div className="flex justify-between relative">
        {Object.values(PRICING_TIERS).flat().map((tier) => (
          <button
            key={tier.templates}
            onClick={() => onChange(tier.templates)}
            className="flex flex-col items-center group"
          >
            <div 
              className={cn(
                "w-4 h-4 rounded-full transition-all duration-200",
                tier.templates === currentTier.templates
                  ? "bg-pink-500 scale-125 ring-4 ring-pink-500/20"
                  : "bg-pink-500/30 hover:bg-pink-500/50"
              )}
            />
            <div className="mt-2 text-sm font-medium text-white opacity-0 group-hover:opacity-100 absolute top-full pt-1 transition-opacity">
              {tier.label}
            </div>
          </button>
        ))}
      </div>

      {/* Slider */}
      <Slider
        value={[value]}
        min={10}
        max={500}
        step={1}
        onValueChange={handleChange}
        className="w-full"
      />

      {/* Current Selection */}
      <div className="text-center">
        <div className="text-2xl font-bold text-white">
          {currentTier.label}
        </div>
        <div className="text-lg text-pink-400 font-medium">
          ${currentTier.price}
        </div>
      </div>
    </div>
  );
}
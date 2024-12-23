// Add common types here
export interface FeatureIcon {
  title: string;
  icon: React.ComponentType;
}

export interface PricingTier {
  templates: number;
  price: number;
  label: string;
}

// Add to your existing types
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export interface CustomImgProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  fetchpriority?: 'high' | 'low' | 'auto';
} 
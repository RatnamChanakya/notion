import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CURRENCIES } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number, currency: keyof typeof CURRENCIES = 'USD'): string {
  const { symbol, rate } = CURRENCIES[currency];
  const convertedAmount = amount * rate;
  
  return `${symbol}${convertedAmount.toLocaleString('en-US', {
    maximumFractionDigits: 0,
  })}`;
}

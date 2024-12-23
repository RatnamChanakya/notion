// Meta/Facebook configuration
export const META_PIXEL_ID = '2943066379204109';

export const CURRENCIES = {
  USD: {
    symbol: '$',
    name: 'USD',
    rate: 1,
  },
  INR: {
    symbol: '₹',
    name: 'INR',
    rate: 83.16,
  },
} as const;

export type Currency = keyof typeof CURRENCIES;
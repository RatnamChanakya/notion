import type { Currency } from './constants';

interface GeoLocation {
  country?: string;
  error?: {
    title: string;
    message: string;
  };
}

export async function detectUserLocation(): Promise<Currency> {
  try {
    const response = await fetch('https://ipinfo.io/json?token=830d43ae6f6858', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      signal: AbortSignal.timeout(3000)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: GeoLocation = await response.json();
    
    if (!data || data.error || !data.country) {
      throw new Error('Invalid geolocation response');
    }

    // Only use INR for India, USD for all other countries
    return data.country === 'IN' ? 'INR' : 'USD';
  } catch (error) {
    // Log error but don't expose details to user
    console.warn('Location detection failed, defaulting to USD:', error);
    return 'USD'; // Gracefully fallback to USD
  }
}
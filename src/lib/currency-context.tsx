import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { CURRENCIES, type Currency } from './constants';
import { detectUserLocation } from './location';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (amount: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | null>(null);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    async function initializeCurrency() {
      try {
        // Detect currency based on IP location
        const detectedCurrency = await detectUserLocation();
        setCurrency(detectedCurrency);
      } catch (error) {
        console.error('Error initializing currency:', error);
        // Fallback to USD
        setCurrency('USD');
      } finally {
        setIsInitialized(true);
      }
    }

    initializeCurrency();
  }, []);

  const formatPrice = useCallback((amount: number) => {
    const { symbol, rate } = CURRENCIES[currency];
    const convertedAmount = amount * rate;
    
    return `${symbol}${convertedAmount.toLocaleString('en-US', {
      maximumFractionDigits: 0,
    })}`;
  }, [currency]);

  // Don't render children until currency is initialized
  if (!isInitialized) {
    return null;
  }

  return (
    <CurrencyContext.Provider value={{ 
      currency, 
      setCurrency, 
      formatPrice 
    }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
import ReactPixel from 'react-facebook-pixel';
import { META_PIXEL_ID } from './constants';

const options = {
  autoConfig: true,
  debug: false
};

export const initFacebookPixel = () => {
  if (typeof window !== 'undefined') {
    ReactPixel.init(META_PIXEL_ID, undefined, options);
  }
};

export const trackPageView = () => {
  if (typeof window !== 'undefined') {
    ReactPixel.pageView();
  }
};

export const trackInitiateCheckout = (value: number) => {
  if (typeof window !== 'undefined') {
    ReactPixel.track('InitiateCheckout', {
      value,
      currency: 'USD',
      content_category: 'Notion Templates',
      num_items: 1
    });
  }
};
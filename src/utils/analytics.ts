
// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackAnimalGeneration = (animalName: string) => {
  trackEvent('animal_generated', {
    animal_name: animalName,
    event_category: 'engagement',
    event_label: 'Random Animal Generator'
  });
};

export const trackPageView = (pageTitle: string, pagePath: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-VNYXKF46XN', {
      page_title: pageTitle,
      page_location: window.location.href,
      page_path: pagePath
    });
  }
};

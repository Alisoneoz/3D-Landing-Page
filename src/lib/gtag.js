export const GA_TRACKING_ID = 'G-CR7XCYQN0X'

export const pageview = (url) => {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      });
    }
  } catch (error) {
    console.log('Analytics pageview error:', error);
  }
};

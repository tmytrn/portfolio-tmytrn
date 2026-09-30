export function trackCalendlyClick(variant) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Schedule', {
      content_name: variant,
      content_category: 'calendly_booking',
    });
  }
}

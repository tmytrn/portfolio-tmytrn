export function trackCalendlyClick(variant, buttonPosition = 'unknown') {
  if (typeof window !== 'undefined' && window.fbq) {
    // Standard Schedule event (used for ad optimization)
    window.fbq('track', 'Schedule', {
      content_name: `${variant}_${buttonPosition}`,
      content_category: 'calendly_booking',
      button_position: buttonPosition,
    });
    
    // Custom event for detailed breakdown in Events Manager
    window.fbq('trackCustom', 'BookCallClick', {
      page: variant,
      button_position: buttonPosition,
    });
  }
}

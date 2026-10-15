// Fallback projects data when Sanity is not configured.
// Dates are placeholders that keep the previous homepage order until real dates are set.
// Card images are used as the foreground (tilting) layer; background falls back to the CSS gradient.
export const fallbackProjects = [
  {
    _id: 'dresen-studio',
    title: 'Dresen Studio',
    description: 'Womens denim brand from Becca Rosen. Made in USA.',
    foregroundImage: '/images/v2/dresen-card.jpg',
    backgroundImage: null,
    link: 'https://www.dresen-studio.com/',
    tools: [],
    platform: 'shopify',
    date: '2025-04-01',
  },
  {
    _id: 'benjamin-edgar',
    title: 'Benjamin Edgar',
    description: 'Designer and Artist based in Chicago',
    foregroundImage: '/images/v2/benjamin-edgar-card.jpg',
    backgroundImage: null,
    link: 'https://benjaminedgar.com',
    tools: [],
    platform: 'shopify',
    date: '2025-03-01',
  },
  {
    _id: 'urban-jurgensen',
    title: 'Urban Jürgensen',
    description: '250 year old Danish watchmaker',
    foregroundImage: '/images/v2/urban-jurgensen-card.jpg',
    backgroundImage: null,
    link: 'https://urbanjurgensen.com/',
    tools: [],
    platform: 'nextjs',
    date: '2025-02-01',
  },
  {
    _id: 'scroll-nyc',
    title: 'Scroll NYC',
    description: 'Art Gallery based in Chinatown NY',
    foregroundImage: '/images/v2/scroll-nyc-card.jpg',
    backgroundImage: null,
    link: null,
    tools: [],
    platform: 'nextjs',
    date: '2025-01-01',
  },
]

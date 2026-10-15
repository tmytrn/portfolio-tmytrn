/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async headers() {
    // llms.txt v2 discovery: Link describedby + markdown alternates for agents
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: [
              '</llms.txt>; rel="describedby"',
              '</index.md>; rel="alternate"; type="text/markdown"; title="TMYTRN LLC"',
            ].join(', '),
          },
        ],
      },
      {
        source: '/shopify',
        headers: [
          {
            key: 'Link',
            value: [
              '</llms.txt>; rel="describedby"',
              '</shopify.md>; rel="alternate"; type="text/markdown"; title="Shopify"',
            ].join(', '),
          },
        ],
      },
      {
        source: '/consulting',
        headers: [
          {
            key: 'Link',
            value: [
              '</llms.txt>; rel="describedby"',
              '</consulting.md>; rel="alternate"; type="text/markdown"; title="Consulting"',
            ].join(', '),
          },
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
      {
        source: '/index.md',
        headers: [
          { key: 'Content-Type', value: 'text/markdown; charset=utf-8' },
        ],
      },
      {
        source: '/shopify.md',
        headers: [
          { key: 'Content-Type', value: 'text/markdown; charset=utf-8' },
        ],
      },
      {
        source: '/consulting.md',
        headers: [
          { key: 'Content-Type', value: 'text/markdown; charset=utf-8' },
        ],
      },
    ]
  },
}

module.exports = nextConfig

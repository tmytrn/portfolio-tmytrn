import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

function getClient() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return null
  }
  
  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
    useCdn: true,
  })
}

export function urlFor(source) {
  const client = getClient()
  if (!client) return null
  
  const builder = imageUrlBuilder(client)
  return builder.image(source)
}

export async function getProjects() {
  const client = getClient()
  
  if (!client) {
    return null
  }

  try {
    const projects = await client.fetch(
      `*[_type == "project"] | order(coalesce(date, "0000-01-01") desc, _createdAt desc) {
        _id,
        title,
        backgroundImage {
          asset,
          hotspot,
          crop,
          alt
        },
        foregroundImage {
          asset,
          hotspot,
          crop,
          alt
        },
        image {
          asset,
          hotspot,
          crop,
          alt
        },
        tools,
        link,
        description,
        platform,
        date
      }`
    )
    return projects
  } catch (error) {
    console.error('Failed to fetch projects from Sanity:', error)
    return null
  }
}

export async function getSiteSettings() {
  const client = getClient()

  if (!client) {
    return null
  }

  try {
    return await client.fetch(
      `*[_type == "siteSettings"][0] {
        footerLeft {
          staticImage {
            asset,
            hotspot,
            crop
          },
          gif {
            asset->{
              url,
              originalFilename,
              mimeType
            }
          },
          alt
        },
        seo {
          metaTitle,
          metaDescription,
          ogTitle,
          ogDescription,
          ogImage {
            asset,
            hotspot,
            crop,
            alt
          },
          keywords
        }
      }`
    )
  } catch (error) {
    console.error('Failed to fetch site settings from Sanity:', error)
    return null
  }
}

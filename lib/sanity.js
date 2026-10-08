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
      `*[_type == "project"] | order(order asc, _createdAt asc) {
        _id,
        title,
        image {
          asset,
          hotspot,
          crop,
          alt
        },
        tools,
        link,
        description
      }`
    )
    return projects
  } catch (error) {
    console.error('Failed to fetch projects from Sanity:', error)
    return null
  }
}

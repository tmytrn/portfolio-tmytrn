import {createClient} from '@sanity/client'
import {readFileSync} from 'fs'
import {resolve, dirname} from 'path'
import {fileURLToPath} from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

function descriptionBlocks(text) {
  return [
    {
      _type: 'block',
      _key: 'description',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'description-span',
          text,
          marks: [],
        },
      ],
    },
  ]
}

// Dates are set in Studio. Platform matches the live site for these four projects.
const projects = [
  {
    _id: 'project-dresen-studio',
    _type: 'project',
    title: 'Dresen Studio',
    description: 'Womens denim brand from Becca Rosen. Made in USA.',
    link: 'https://www.dresen-studio.com/',
    platform: 'shopify',
    tools: [],
    // Composite cards seed as foreground until separate bg/fg assets are uploaded in Studio.
    foregroundImagePath: resolve(__dirname, '../public/images/v2/dresen-card.jpg'),
    foregroundImageAlt: 'Dresen Studio website screenshot',
    backgroundImagePath: null,
  },
  {
    _id: 'project-benjamin-edgar',
    _type: 'project',
    title: 'Benjamin Edgar',
    description: 'Designer and Artist based in Chicago',
    link: 'https://benjaminedgar.com',
    platform: 'shopify',
    tools: [],
    foregroundImagePath: resolve(__dirname, '../public/images/v2/benjamin-edgar-card.jpg'),
    foregroundImageAlt: 'Benjamin Edgar portfolio screenshot',
    backgroundImagePath: null,
  },
  {
    _id: 'project-urban-jurgensen',
    _type: 'project',
    title: 'Urban Jürgensen',
    description: '250 year old Danish watchmaker',
    link: 'https://urbanjurgensen.com/',
    platform: 'nextjs',
    tools: [],
    foregroundImagePath: resolve(__dirname, '../public/images/v2/urban-jurgensen-card.jpg'),
    foregroundImageAlt: 'Urban Jürgensen website screenshot',
    backgroundImagePath: null,
  },
  {
    _id: 'project-scroll-nyc',
    _type: 'project',
    title: 'Scroll NYC',
    description: 'Art Gallery based in Chinatown NY',
    link: null,
    platform: 'nextjs',
    tools: [],
    foregroundImagePath: resolve(__dirname, '../public/images/v2/scroll-nyc-card.jpg'),
    foregroundImageAlt: 'Scroll NYC website screenshot',
    backgroundImagePath: null,
  },
]

async function uploadImage(imagePath, alt) {
  console.log(`Uploading ${imagePath}...`)
  const imageBuffer = readFileSync(imagePath)
  const asset = await client.assets.upload('image', imageBuffer, {
    filename: imagePath.split('/').pop(),
  })
  
  return {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: asset._id,
    },
    alt,
  }
}

async function seedProjects() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.error('Error: NEXT_PUBLIC_SANITY_PROJECT_ID is not set')
    console.error('Please add Sanity environment variables to .env.local')
    process.exit(1)
  }

  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error('Error: SANITY_API_WRITE_TOKEN is not set')
    console.error('Create a token with write access at https://sanity.io/manage')
    process.exit(1)
  }

  console.log('Starting Sanity seed...')
  console.log(`Project ID: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`)
  console.log(`Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}`)

  for (const project of projects) {
    try {
      console.log(`\nProcessing: ${project.title}`)
      
      const foregroundImage = await uploadImage(
        project.foregroundImagePath,
        project.foregroundImageAlt
      )
      const backgroundImage = project.backgroundImagePath
        ? await uploadImage(project.backgroundImagePath, '')
        : undefined

      // Create or replace project document
      const doc = {
        _id: project._id,
        _type: project._type,
        title: project.title,
        description: descriptionBlocks(project.description),
        link: project.link,
        platform: project.platform,
        tools: project.tools,
        foregroundImage,
        ...(backgroundImage ? {backgroundImage} : {}),
      }
      
      const result = await client.createOrReplace(doc)
      console.log(`✓ Created/updated project: ${result._id}`)
    } catch (error) {
      console.error(`✗ Error processing ${project.title}:`, error.message)
    }
  }

  console.log('\n✓ Seed completed!')
  console.log('Visit /studio to edit your projects')
}

seedProjects().catch((error) => {
  console.error('Seed failed:', error)
  process.exit(1)
})

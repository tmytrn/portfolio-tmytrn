import {createClient} from '@sanity/client'
import {readFileSync} from 'fs'
import {resolve, dirname} from 'path'
import {fileURLToPath} from 'url'
import 'dotenv/config'

const __dirname = dirname(fileURLToPath(import.meta.url))

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

const projects = [
  {
    _id: 'project-dresen-studio',
    _type: 'project',
    title: 'Dresen Studio',
    description: 'Womens denim brand from Becca Rosen. Made in USA.',
    link: 'https://www.dresen-studio.com/',
    order: 1,
    tools: [],
    imagePath: resolve(__dirname, '../public/images/v2/dresen-card.jpg'),
    imageAlt: 'Dresen Studio website screenshot',
  },
  {
    _id: 'project-benjamin-edgar',
    _type: 'project',
    title: 'Benjamin Edgar',
    description: 'Designer and Artist based in Chicago',
    link: 'https://benjaminedgar.com',
    order: 2,
    tools: [],
    imagePath: resolve(__dirname, '../public/images/v2/benjamin-edgar-card.jpg'),
    imageAlt: 'Benjamin Edgar portfolio screenshot',
  },
  {
    _id: 'project-urban-jurgensen',
    _type: 'project',
    title: 'Urban Jürgensen',
    description: '250 year old Danish watchmaker',
    link: 'https://urbanjurgensen.com/',
    order: 3,
    tools: [],
    imagePath: resolve(__dirname, '../public/images/v2/urban-jurgensen-card.jpg'),
    imageAlt: 'Urban Jürgensen website screenshot',
  },
  {
    _id: 'project-scroll-nyc',
    _type: 'project',
    title: 'Scroll NYC',
    description: 'Art Gallery based in Chinatown NY',
    link: null,
    order: 4,
    tools: [],
    imagePath: resolve(__dirname, '../public/images/v2/scroll-nyc-card.jpg'),
    imageAlt: 'Scroll NYC website screenshot',
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
      
      // Upload image
      const imageField = await uploadImage(project.imagePath, project.imageAlt)
      
      // Create or replace project document
      const doc = {
        _id: project._id,
        _type: project._type,
        title: project.title,
        description: project.description,
        link: project.link,
        order: project.order,
        tools: project.tools,
        image: imageField,
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

# Sanity CMS Setup

This site uses Sanity CMS to manage the Select Work projects on the homepage.

## Initial Setup

### 1. Create a Sanity Project

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Click "Create New Project"
3. Name it "TMYTRN Portfolio" (or any name you prefer)
4. Choose a dataset name (default: `production`)
5. Copy your **Project ID**

### 2. Configure CORS Origins

In your Sanity project settings, add these CORS origins with credentials allowed:

- `http://localhost:3000` (for local development)
- `https://tmytrn.com` (production site)
- `https://*.vercel.app` (Vercel preview deployments)

### 3. Create an API Token

1. In your Sanity project, go to **API** → **Tokens**
2. Click "Add API Token"
3. Name it "Seed Script" or "Write Token"
4. Set permissions to **Editor** or **Write**
5. Copy the token (you won't be able to see it again)

### 4. Set Environment Variables

Create a `.env.local` file in the project root (or add to Vercel):

```bash
# Required
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id

# Optional (these have defaults)
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Only needed for seed script (never commit this!)
SANITY_API_WRITE_TOKEN=your-write-token
```

**For Vercel deployment:**
1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `NEXT_PUBLIC_SANITY_API_VERSION`
4. **Do NOT add** `SANITY_API_WRITE_TOKEN` to Vercel (only needed locally for seeding)

### 5. Seed Initial Projects

Run the seed script to upload the current 4 projects to Sanity:

```bash
node --env-file=.env.local scripts/seed-sanity.mjs
```

This will:
- Upload the project card images from `public/images/v2/`
- Create project documents in Sanity with titles, descriptions, and links
- Use deterministic IDs so you can run it multiple times safely (idempotent)

### 6. Access the Studio

Visit [http://localhost:3000/studio](http://localhost:3000/studio) (or https://tmytrn.com/studio in production) to:
- Edit project titles, descriptions, and links
- Add tools/technologies to each project
- Reorder projects using the "Display Order" field
- Add new projects

Changes made in the Studio will appear on the homepage within 60 seconds (ISR revalidation).

## Studio Features

### Project Fields

- **Title**: Project name (required)
- **Image**: Project card image with hotspot/crop support (required)
- **Alt Text**: Image alt text for accessibility (required)
- **Tools & Technologies**: Tags like "Shopify", "Next.js", "Klaviyo" (optional)
- **Project URL**: External link to the live site (optional)
- **Description**: Short project description (optional)
- **Display Order**: Number to control sort order (lower = higher on page)

### Sorting

Projects are sorted by:
1. Display Order (ascending)
2. Creation date (ascending) for items with the same order

## Fallback Behavior

If Sanity environment variables are not set, the site automatically falls back to static project data from `lib/fallbackProjects.js`. This ensures:

- `next build` works without Sanity configured
- Vercel preview deployments work before setup
- The site never breaks due to missing CMS configuration

## Troubleshooting

**Studio shows "Configuration Error"**
- Make sure `NEXT_PUBLIC_SANITY_PROJECT_ID` is set
- Check that the project ID is correct
- Verify CORS origins are configured

**Seed script fails**
- Ensure `SANITY_API_WRITE_TOKEN` is set in `.env.local`
- Check that the token has write permissions
- Verify the project ID and dataset are correct

**Projects don't update on the homepage**
- Wait 60 seconds for ISR revalidation
- Check browser console for errors
- Verify image URLs are loading correctly

**Images not loading**
- Check that `cdn.sanity.io` is in `next.config.js` remotePatterns
- Verify images were uploaded successfully in the Studio
- Check the browser network tab for blocked requests

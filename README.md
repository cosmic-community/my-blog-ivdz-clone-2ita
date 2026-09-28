# My Blog

![App Preview](https://imgix.cosmicjs.com/7578aab0-9e84-11f1-989e-f5f2f11499a4-autopilot-photo-1461749280684-dccba630e2f6-1787442716877.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A quiet, text-first personal blog for Robert DeRosa, covering Long COVID, science, healthcare, public policy, advocacy, technology, personal projects, and everyday life.

## Features

- Reverse-chronological home feed with post kind badges, category, date, and excerpt
- Long-form post pages with generous line height and a comfortable reading measure
- Category archive pages and category index
- Tag browsing with tag index and per-tag archives
- About page sourced from the Authors object (bio + avatar)
- RSS feed at `/rss.xml`
- Per-page SEO metadata with Open Graph tags
- Fully responsive, semantic, and accessible (visible focus states, real heading order, alt text from media records)
- Only published posts are rendered

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6aba00a978d5b77427059f28&clone_repository=6a8a37f9b38644920ec9194e)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories.
>
> User instructions: a clean, modern personal blog that reflects my interests and experiences across Long COVID, science, healthcare, public policy, advocacy, technology, personal projects, and everyday life. It should feel thoughtful, intelligent, personal, and independent rather than like an organization, health blog, or professional publication. Long COVID is an important recurring subject but should not define the entire site. The design should prioritize excellent typography, readability, simple navigation, and individual writing, with room for everything from substantial essays and research commentary to short observations, project updates, and personal posts."

### Code Generation Prompt

> "Build a Next.js application for a creative portfolio called "My Blog". The content is managed in Cosmic CMS with the following object types: authors, categories, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A personal blog for Robert DeRosa covering Long COVID, science and healthcare, public policy, advocacy, technology, personal projects, and everyday life.
>
> Content model already exists in the bucket — use it as-is:
> - "posts" type: title, excerpt, rich-text content, featured image, post kind (Essay / Note / Research Commentary / Project Update / Personal), tags, author (relationship), category (relationship), published date
> - "categories" type
> - "authors" type (single author: Robert DeRosa, with bio and avatar)
>
> Pages and features:
> - Home page: short intro/hero with the author's name and a one-line description, then a reverse-chronological list of posts with title, date, post kind badge, category, and excerpt. Featured image shown where present.
> - Post detail page: clean, readable long-form typography with generous line height and a comfortable measure (~65-75 characters). Title, published date, post kind, category, tags, author byline with avatar and bio, and the rich-text body rendered properly (headings, lists, links, blockquotes, code blocks).
> - Category archive pages: list all posts in a given category.
> - Tag filtering: browse posts by tag.
> - About page: pulls the author bio and avatar from the authors object.
> - Post kind should be visible as a small badge/label so readers can tell an Essay from a Note or Project Update at a glance.
>
> Design direction: quiet, text-first, and highly readable — this is a writing-led personal blog, not a marketing site. Restrained palette, strong typographic hierarchy, plenty of white space, no heavy gradients or stock-photo hero collages. Must be fully responsive and genuinely accessible: proper semantic HTML, real heading order, visible focus states, sufficient color contrast, and alt text pulled from media records. Include an RSS feed and sensible SEO metadata (title, description, Open Graph tags) per page. Only render published posts."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org/) (App Router)
- [Cosmic](https://www.cosmicjs.com) headless CMS
- TypeScript
- Tailwind CSS with `@tailwindcss/typography`

## Getting Started

### Prerequisites
- [Bun](https://bun.sh/) installed
- A Cosmic account and bucket with `posts`, `categories`, and `authors` object types

### Installation

```bash
bun install
bun run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Cosmic SDK Examples

```typescript
// Fetch all published posts, newest first
import { cosmic } from '@/lib/cosmic'

const response = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)
```

```typescript
// Fetch a single post by slug with nested author/category
const response = await cosmic.objects
  .findOne({ type: 'posts', slug: 'my-post' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app reads directly from your bucket's `posts`, `categories`, and `authors` object types via the [Cosmic SDK](https://www.cosmicjs.com/docs). All Cosmic API calls happen in Server Components and Route Handlers only — no credentials are ever exposed to the browser. See `lib/cosmic.ts` for all data-fetching logic.

## Deployment Options

### Vercel
1. Push this repository to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Add the environment variables listed below
4. Deploy

### Netlify
1. Push this repository to GitHub
2. Import the project in [Netlify](https://app.netlify.com/)
3. Set the build command to `bun run build` and publish directory to `.next`
4. Add the environment variables listed below
5. Deploy

### Environment Variables
Set these in your hosting provider's dashboard:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`
<!-- README_END -->
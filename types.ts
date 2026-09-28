export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

export interface CosmicMedia {
  url: string
  imgix_url: string
  alt_text?: string
}

export type PostKind =
  | 'Essay'
  | 'Note'
  | 'Research Commentary'
  | 'Project Update'
  | 'Personal'

export interface Author extends CosmicObject {
  type: 'authors'
  metadata: {
    name?: string
    bio?: string
    avatar?: CosmicMedia
    website?: string
  }
}

export interface Category extends CosmicObject {
  type: 'categories'
  metadata: {
    name?: string
    description?: string
    accent_color?: string
  }
}

export interface Post extends CosmicObject {
  type: 'posts'
  metadata: {
    excerpt?: string
    content?: string
    featured_image?: CosmicMedia
    post_kind?: PostKind
    tags?: string[] | string
    author?: Author
    category?: Category
    published_date?: string
  }
}

export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit?: number
  skip?: number
}
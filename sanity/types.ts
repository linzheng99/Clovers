export interface Post {
  _id: number
  title:string
  slug: string
  mainImage: string
  categories: string
  // TODO body type
  body: any
  description: string
  publishedAt: Date
}

import { getBlog } from '~/sanity/query/post';
interface Props {
  params: { blog: string }
}
export default async function Blog({ params }: Props) {
  const slug = params.blog
  
  const blog = await getBlog(slug)
  
  
  return (
    <div>{blog.description}</div>
  )

};

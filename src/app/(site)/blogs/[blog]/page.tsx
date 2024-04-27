import { getBlog } from '~/sanity/query/post';
import { PortableText } from '@portabletext/react';

interface Props {
  params: { blog: string }
}
export default async function Blog({ params }: Props) {
  const slug = params.blog
  const blog = await getBlog(slug)

  return (
    <div>
      {
        blog.body && (<PortableText value={blog.body} />)
      }
    </div>
  )

};

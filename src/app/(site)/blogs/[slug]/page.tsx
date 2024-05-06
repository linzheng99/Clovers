import { PortableText } from '@portabletext/react';

import { getBlog } from '~/sanity/query/post';

interface Props {
  params: { slug: string }
}
export default async function Blog({ params }: Props) {
  const slug = params.slug
  const blog = await getBlog(slug)

  return (
    <div>
      {
        blog.body && (<PortableText value={blog.body} />)
      }
    </div>
  )

};

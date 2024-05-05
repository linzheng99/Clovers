import { PortableText } from '@portabletext/react';

import { getBlog } from '~/sanity/query/post';

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

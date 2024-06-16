
import { getBlog } from '~/sanity/query/post';
import { PostPortableText } from '~/src/components/PostPortableText';

interface Props {
  params: { slug: string }
}
export default async function Blog({ params }: Props) {
  const slug = params.slug
  const blog = await getBlog(slug)

  return (
    <div>
      {
        blog.body && (
          <div className="prose dark:prose-invert">
            <PostPortableText value={blog.body} />
          </div>
        )
      }
    </div>
  )

};

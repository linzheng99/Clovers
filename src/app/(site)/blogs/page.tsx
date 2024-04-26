import { getBlogs } from '~/sanity/query/post';
import BlogPostCard from '@/components/ui/BlogPostCard';

export default async function BlogsPage() {
  const blogs = await getBlogs()

  return (
    <div className='max-w-5xl mx-auto p-2'>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
        {
          blogs.map((blog) => <BlogPostCard post={blog} key={blog._id} />)
        }
      </div>
    </div>
  );
}

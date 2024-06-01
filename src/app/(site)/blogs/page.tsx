import { getBlogs } from '~/sanity/query/post';
import BlogPostCard from '~/src/components/ui/BlogPostCard';


export default async function BlogsPage() {
  const blogs = await getBlogs()

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8'>
      {
        blogs.map((blog) => <BlogPostCard post={blog} key={blog._id} />)
      }
    </div>
  );
}

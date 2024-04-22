import Image from 'next/image';
import Link from 'next/link';
import { getBlogs } from '~/sanity/query/post';

export default async function BlogsPage() {
  const blogs = await getBlogs()

  return (
    <div className='max-w-5xl mx-auto p-10'>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
        {
          blogs.map((blog) =>
            <Link key={blog._id} className='border border-gray-500 rounded-lg p-1' href={`/blogs/${blog.slug}`}>
              {blog.mainImage &&
                <Image
                  src={blog.mainImage}
                  alt={blog.title}
                  width={750}
                  height={250}
                  className='object-cover rounded-lg border border-gray-500'
                />
              }
              <div>
                {blog.title}
              </div>
            </Link>
          )
        }
      </div>
    </div>
  );
}

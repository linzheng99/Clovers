import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import { getBlogs } from '~/sanity/query/post';

export default async function BlogsPage() {
  const blogs = await getBlogs()

  return (
    <div className='max-w-5xl mx-auto p-2'>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
        {
          blogs.map((blog) =>
            <Link key={blog._id} className='group border border-gray-500 rounded-2xl transition-transform hover:-translate-y-1' href={`/blogs/${blog.slug}`}>
              {blog.mainImage &&
                <Image
                  src={blog.mainImage}
                  alt={blog.title}
                  width={750}
                  height={250}
                  className='object-cover rounded-t-2xl border border-gray-500'
                />
              }
              <div className='flex flex-col p-2'>
                <h2 className='text-base font-bold tracking-tight opacity-70 transition-opacity group-hover:opacity-100 md:text-xl'>
                  {blog.title}
                </h2>
                <span className='flex justify-between opacity-50 transition-opacity group-hover:opacity-100'>
                  <span>
                    {blog.categories}
                  </span>
                  <span>
                    {dayjs(blog.publishedAt).format('YYYY-MM-DD')}
                  </span>
                </span>
              </div>
            </Link>
          )
        }
      </div>
    </div>
  );
}

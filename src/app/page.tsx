import { blogs } from '@/app/data/blogs';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Navbar from './components/Navbar';

const Home = () => {
  return (
    <>
    <Navbar/>
      <Header />
      
      
      <section className="bg-[#F5F5DC] text-emerald-800 p-8 text-center">
        <h1 className="text-5xl font-bold">Dive Into Web Developing</h1>
        <p className="mt-4 text-lg">"Empowering web developers with tips, tutorials, and insights for building modern, dynamic websites."</p>
      </section>

      <div className="space-y-8 px-6 sm:px-12">
        <h2 className="text-4xl font-bold text-emerald-800 mt-6">Empowering Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all hover:border-4 hover:border-emerald-800 hover:scale-105"
            >
              <Link href={`/posts/${blog.id}`}>
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 transform transition duration-300 ease-in-out"
                />
                <h3 className="text-xl font-semibold text-emerald-800">{blog.title}</h3>
                <p className="text-gray-700 mt-2">{blog.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

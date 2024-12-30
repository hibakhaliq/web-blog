"use client"; 

import { useParams } from 'next/navigation'; 
import { blogs } from '@/app/data/blogs';
import CommentSection from "@/app/components/CommentSection";

const BlogDetailPage = () => {
  const { id } = useParams(); 

  
  if (!id) {
    return <div>Please Wait</div>;
  }

  
  const blog = blogs.find((blog) => blog.id === id);

 
  if (!blog) {
    return <div>Missing Blog!</div>;
  }

  return (
    <div className="p-6">
      
      <div className="mb-8">
        
        <h1 className="text-3xl font-semibold text-emerald-800 text-center mb-4">{blog.title}</h1>

    
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-90 h-80 object-cover rounded-lg mx-auto mb-4"
        />
        
       
        <p className="text-lg text-gray-700 mt-4 text-center">{blog.description}</p>

       
        <a
          href={blog.content}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-800 mt-4 inline-block underline text-center"
        >
          Read the rest of the blog
        </a>
      </div>

      {/* Comment Section */}
      <CommentSection blogId={blog.id} />
    </div>
  );
};

export default BlogDetailPage;


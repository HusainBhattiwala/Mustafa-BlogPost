import Layout from '../components/Layout';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/latest-blogs')
      .then(response => response.json())
      .then(data => setLatestBlogs(data));
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg mb-8">Explore the latest blog posts on various topics.</p>

        <div className="w-full max-w-4xl space-y-12">
          <section className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestBlogs.map((blog) => (
                <Link key={blog.id} href={`/blogs/${blog.id}`} passHref>
                  <div className="border rounded-lg shadow-lg overflow-hidden bg-gray-100 cursor-pointer">
                    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                      <p className="text-gray-700 mb-2">{blog.summary}</p>
                      <p className="text-gray-500 text-sm">{blog.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 mb-4">
              Welcome to our blog where we share insights on various topics. Our team is dedicated to bringing you the latest news and articles.
              We believe in the power of information and aim to provide our readers with valuable and engaging content.
            </p>
            <p className="text-gray-700 mb-4">
              Our blog covers a wide range of topics including technology, health, lifestyle, and more. Whether you are looking for the latest trends,
              in-depth analyses, or just some fun reads, we have something for everyone.
            </p>
            <p className="text-gray-700 mb-4">
              Our team of writers is passionate about their work and strives to bring you well-researched and thoughtful articles. We hope to create a
              community of informed and engaged readers who share our love for learning and discovery.
            </p>
            <img src="/images/about.jpg" alt="About Us" className="w-full h-64 object-cover rounded-lg" />
          </section>

          <section className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              Have any questions or feedback? Feel free to reach out to us through our contact page. We're here to help!
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> contact@ourblog.com
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Phone:</strong> +123-456-7890
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Address:</strong> 123 Blog Street, Blog City, BL 45678
            </p>
            <img src="/images/contact.jpg" alt="Contact Us" className="w-full h-64 object-cover rounded-lg" />
          </section>
        </div>
      </div>
    </Layout>
  );
}

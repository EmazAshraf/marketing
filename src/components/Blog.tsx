import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: '2024 Real Estate Market Trends: What Buyers Need to Know',
      excerpt: 'Understanding current market conditions and how they impact your home buying strategy in the coming year.',
      author: 'Sarah Johnson',
      date: 'December 15, 2024',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Market Insights'
    },
    {
      title: 'First-Time Homebuyer Guide: 10 Steps to Success',
      excerpt: 'A comprehensive guide covering everything first-time buyers need to know, from pre-approval to closing.',
      author: 'Emily Rodriguez',
      date: 'December 10, 2024',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Buying Tips'
    },
    {
      title: 'Investment Property ROI: Calculating Your Returns',
      excerpt: 'Learn how to analyze investment properties and calculate potential returns to make informed decisions.',
      author: 'Michael Chen',
      date: 'December 5, 2024',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Investment'
    },
    {
      title: 'Staging Your Home for a Quick Sale',
      excerpt: 'Professional tips on how to stage your home to attract buyers and achieve the best possible sale price.',
      author: 'Sarah Johnson',
      date: 'November 30, 2024',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/2980720/pexels-photo-2980720.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Selling Tips'
    },
    {
      title: 'Understanding Mortgage Options in 2024',
      excerpt: 'A breakdown of different mortgage types and financing options available to today\'s homebuyers.',
      author: 'Emily Rodriguez',
      date: 'November 25, 2024',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Financing'
    },
    {
      title: 'Local Neighborhood Spotlight: Downtown District',
      excerpt: 'Exploring the amenities, schools, and lifestyle benefits of our popular downtown neighborhood.',
      author: 'Michael Chen',
      date: 'November 20, 2024',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Neighborhoods'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Market Insights': 'bg-blue-100 text-blue-700',
      'Buying Tips': 'bg-green-100 text-green-700',
      'Investment': 'bg-amber-100 text-amber-700',
      'Selling Tips': 'bg-purple-100 text-purple-700',
      'Financing': 'bg-red-100 text-red-700',
      'Neighborhoods': 'bg-indigo-100 text-indigo-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Real Estate Insights & Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest market trends, expert advice, and helpful guides to make better real estate decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                  </div>
                  <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                    Read More
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
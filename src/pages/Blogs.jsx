import React from "react";
import { BLOG_POSTS } from "../constants";
import { Calendar, User, ArrowRight, Search } from "lucide-react";

const Blogs = () => {
  return (
    <div className="bg-base-100 min-h-screen pb-32">
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-secondary mb-6">
            Insightful Perspectives
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-12">
            Stay updated with the latest trends in technology, design, and
            business.
          </p>

          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
        </div>
      </section>

      <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-primary text-sm font-bold shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1.5" />
                    {post.author}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-secondary mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-500 mb-8 flex-grow">{post.excerpt}</p>

                <button className="flex items-center font-bold text-primary group/btn">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn btn-outline btn-primary px-10 rounded-xl">
            Load More Articles
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blogs;

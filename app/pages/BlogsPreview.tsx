import { getAllBlogPosts } from "../../lib/blogs";
import Link from "next/link";

export default function BlogsPreview() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <div
      className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden"
      id="blogs"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-50" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-6xl mb-4 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Blogs
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Latest thoughts and technical articles
        </p>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No blog posts yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blogs/${post.slug}`}>
                <div className="group h-full bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors mb-2">
                    {post.title}
                  </h3>
                  <time className="text-xs text-gray-500 mb-3">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <p className="text-gray-400 text-sm line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-purple-900/50 text-purple-200 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
          >
            View All Blogs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

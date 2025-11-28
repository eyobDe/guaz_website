import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(blogPosts[0]);

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-6HMHCJMLS3", { page_path: "/blog" });
    }
    // Scroll to top when selected blog changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedBlog]);

  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <nav className="text-sm text-muted">
          <Link to="/" className="transition hover:text-primary">
            Home
          </Link>{" "}
          / <span className="text-primary-dark">Blog</span>
        </nav>
        <h1 className="text-4xl font-semibold">Insights & Advice</h1>
        <p className="max-w-3xl text-lg text-muted">
          Fresh perspectives from GuazExpress veterans on moving, logistics, and the rhythms of Addis Ababa.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Main Content Area */}
        <section className="lg:col-span-2 space-y-8 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft h-fit">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-primary-dark">Featured Insight</p>
              <h2 className="text-3xl font-semibold">{selectedBlog.title}</h2>
              <p className="text-sm text-muted">
                {selectedBlog.excerpt}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-dark">Author</p>
              <div className="flex items-center gap-3">
                {selectedBlog.authorImage ? (
                  <img
                    src={selectedBlog.authorImage}
                    alt={selectedBlog.author}
                    className="h-16 w-16 rounded-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary-dark">
                    {selectedBlog.author ? selectedBlog.author.charAt(0) : "G"}
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-primary-dark">{selectedBlog.author}</p>
                  <p className="text-xs text-muted">{selectedBlog.authorRole}</p>
                </div>
              </div>
            </div>
          </div>

          {selectedBlog.images && selectedBlog.images.length > 0 && (
            <div className={`grid gap-4 ${selectedBlog.images.length > 1 ? "md:grid-cols-2" : "grid-cols-1"}`}>
              {selectedBlog.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Blog visual ${index + 1}`}
                  className="h-48 w-full rounded-3xl object-cover"
                />
              ))}
            </div>
          )}

          <article className="space-y-6 text-sm text-muted">
            {selectedBlog.content}
          </article>
        </section>

        {/* Sidebar List */}
        <aside className="lg:col-span-1 space-y-6">
          <h3 className="text-xl font-semibold text-primary-dark">More Insights</h3>
          <div className="flex flex-col gap-4">
            {blogPosts.map((post) => {
              const isSelected = post.id === selectedBlog.id;
              return (
                <div
                  key={post.id}
                  onClick={() => setSelectedBlog(post)}
                  className={`group cursor-pointer rounded-2xl border p-4 transition-all duration-200 ${
                    isSelected
                      ? "border-primary bg-primary/5 shadow-md scale-[1.02]"
                      : "border-slate/10 bg-white shadow-sm hover:border-primary/30 hover:shadow-md"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <p className="text-xs font-medium text-muted">{post.date}</p>
                        {isSelected && <span className="text-xs font-bold text-primary">Reading</span>}
                    </div>
                    
                    <h4 className={`font-semibold transition-colors line-clamp-2 ${isSelected ? 'text-primary' : 'text-primary-dark group-hover:text-primary'}`}>
                        {post.title}
                    </h4>
                    
                    <p className="text-xs text-muted line-clamp-3 leading-relaxed">
                        {post.excerpt}
                    </p>
                    
                    {!isSelected && (
                        <div className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Read Article <span>→</span>
                        </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog;

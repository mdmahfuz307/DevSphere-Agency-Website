import BlogCard from './BlogCard';

export default function BlogList({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((p) => (
        <BlogCard key={p.id} post={p} />
      ))}
    </div>
  );
}

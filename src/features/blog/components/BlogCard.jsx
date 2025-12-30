
export default function BlogCard({ post }) {
  return (
    <article className="bg-white rounded-xl shadow p-4">
      <img src={post.image} alt={post.title} className="w-full rounded-md mb-4" />
      <h3 className="font-bold text-lg">{post.title}</h3>
      <p className="text-sm text-gray-500">{post.excerpt}</p>
    </article>
  );
}

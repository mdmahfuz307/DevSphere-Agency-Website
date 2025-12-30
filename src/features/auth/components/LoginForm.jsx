
export default function LoginForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" />
      <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" />
      <button className="btn btn-primary w-full">Sign in</button>
    </form>
  );
}

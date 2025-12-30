
export default function RegisterForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="name" placeholder="Full name" className="input input-bordered w-full" />
      <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" />
      <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" />
      <button className="btn btn-primary w-full">Create account</button>
    </form>
  );
}

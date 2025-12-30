export default function Modal({ children, open }) {
  if (!open) return null;
  return <div className="fixed inset-0 bg-black/40 flex items-center justify-center">{children}</div>;
}

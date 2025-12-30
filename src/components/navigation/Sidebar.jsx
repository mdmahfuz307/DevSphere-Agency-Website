import { Link } from 'react-router-dom';

export default function Sidebar(){
  return (
    <aside className="w-64 border-r p-4"> 
      <nav className="space-y-2">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </aside>
  )
}

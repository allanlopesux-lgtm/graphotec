import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">GRAPHOTEC</h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/library">Biblioteca</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
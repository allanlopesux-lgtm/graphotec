import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold text-white"
        >
          Graphotec
        </Link>

        <nav className="flex gap-6 text-slate-300">

          <Link to="/">Home</Link>

          <Link to="/library">
            Biblioteca
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/cases">
            Casos
          </Link>

          <Link to="/laboratory">
            Laboratório
          </Link>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;
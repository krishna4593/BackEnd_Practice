import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-slate-900"
        >
          <span className="text-indigo-600">✦</span>
          NoteSpace
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-6">

          <NavLink
            to="/notes"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-indigo-600"
                  : "text-slate-600 hover:text-slate-900"
              }`
            }
            
          >
            Notes
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-indigo-600"
                  : "text-slate-600 hover:text-slate-900"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/notes/add"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 text-sm font-medium text-white transition ${
                isActive
                  ? "bg-indigo-700"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`
              
            }
            end
          >
            Add Note
          </NavLink>

          <button
            type="button"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
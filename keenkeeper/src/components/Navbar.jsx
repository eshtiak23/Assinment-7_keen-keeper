import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaHouse, FaClock, FaChartSimple, FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
      isActive
        ? "bg-green-900 text-white"
        : "text-slate-400 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <h1 className="text-2xl font-bold text-purple-400 cursor-pointer">
            Keen <span className="text-green-400">Keeper</span>
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-4">
          <NavLink to="/" className={linkStyle}>
            <FaHouse />
            Home
          </NavLink>

          <NavLink to="/timeline" className={linkStyle}>
            <FaClock />
            Timeline
          </NavLink>

          <NavLink to="/stats" className={linkStyle}>
            <FaChartSimple />
            Stats
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-3 bg-slate-800 p-4 rounded-xl">
            <NavLink
              to="/"
              className={linkStyle}
              onClick={() => setMenuOpen(false)}
            >
              <FaHouse />
              Home
            </NavLink>

            <NavLink
              to="/timeline"
              className={linkStyle}
              onClick={() => setMenuOpen(false)}
            >
              <FaClock />
              Timeline
            </NavLink>

            <NavLink
              to="/stats"
              className={linkStyle}
              onClick={() => setMenuOpen(false)}
            >
              <FaChartSimple />
              Stats
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
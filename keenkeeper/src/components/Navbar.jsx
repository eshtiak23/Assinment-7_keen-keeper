import { NavLink } from "react-router-dom";
import { FaHouse, FaClock, FaChartSimple } from "react-icons/fa6";

const Navbar = () => {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
      isActive
        ? "bg-green-900 text-white"
        : "text-slate-400 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        
        <h1 className="text-2xl font-bold text-purple-400">
     Keen <span className="text-green-400">Keeper</span>
        </h1>

        {/* Links Section  */}
        
        <div className="flex gap-4">
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

      </div>
    </nav>
  );
};

export default Navbar;
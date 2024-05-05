import { NavLink } from "react-router-dom";
import logo from "../assets/image.png";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "px-3 py-2 bg-black text-white rounded-md hover:bg-emerald-900 hover:text-white"
      : "px-3 py-2 text-white rounded-md hover:bg-emerald-900 hover:text-white";

  return (
    <nav className="border-b bg-emerald-500 border-emerald-300">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center justify-center flex-1 md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex items-center flex-shrink-0 mr-4" to="/">
              <img className="w-auto h-10" src={logo} alt="React Jobs" />
              <span className="hidden ml-2 text-2xl font-bold text-white md:block">
                CASR RFP for SAAS
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/buildings" className={linkClass}>
                  Buildings
                </NavLink>
                <NavLink to="*" className={linkClass}>
                  Profile
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

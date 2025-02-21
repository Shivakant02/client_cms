import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { User, LogOut, Github, Phone } from "lucide-react";
import ThemeToggle from "../buttons/ThemeToggle";
import { useContext } from "react";
import { ThemeContext } from "../contaxt/ThemeProvider";
// Import your ThemeProvider

function Navbar() {
  const { isLoggedIn, currentUser, role } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext); // Get theme value ("light" or "dark")

  function handleLogout() {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg shadow-md px-6 py-3 flex justify-between items-center 
        ${theme === "dark" ? "bg-black/30 text-white" : "bg-white/30 text-gray-900"}
      `}
    >
      {/* Left - Logo */}
      <div className="flex items-center gap-4">
        <Link to="/">
          <h2 className="font-bold text-2xl">U-Insure</h2>
        </Link>
      </div>

      {/* Center - Navigation Links */}
      <ul className="flex items-center gap-3">
        {isLoggedIn && role === "admin" && (
          <li>
            <Link to="/dashboard" className="hover:underline">Admin Dashboard</Link>
          </li>
        )}
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/policies" className="hover:underline">Buy Policy</Link>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <Link to="/myPolicies" className="hover:underline">My Policies</Link>
            </li>
            <li>
              <Link to="/myClaims" className="hover:underline">My Claims</Link>
            </li>
          </>
        )}
        <li>
          <Link to="/about" className="hover:underline">About Us</Link>
        </li>
      </ul>

      {/* Right - Icons & Actions */}
      <div className="flex items-center gap-4">
        {/* GitHub Icon */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Github size={24} className={`${theme === "dark" ? "text-white" : "text-gray-900"}`} />
        </a>
        <ThemeToggle />

        {/* Support (Call Expert) */}
        <button className="flex items-center gap-1 text-blue-500 hover:text-blue-700 cursor-pointer">
          <Phone size={20} /> Call Expert
        </button>

        {isLoggedIn ? (
          <>
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 text-red-500 hover:text-red-700 cursor-pointer"
            >
              <LogOut size={18} /> Logout
            </button>

            {/* User Profile */}
            <Link to="/profile">
              <div className={`w-10 h-10 rounded-full overflow-hidden border flex items-center justify-center 
                ${theme === "dark" ? "border-gray-400" : "border-gray-500"}
              `}>
                {currentUser.avatar ? (
                  <img src={currentUser.avatar} alt="profile" className="w-full h-full object-cover" />
                ) : (
                  <User size={24} className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} />
                )}
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

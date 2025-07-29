
// components/Navbar.jsx
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
    navigate("/login");
  };

  // Helper to check if path matches current location to apply active styles
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gray-800 shadow-sm py-3 px-4 md:px-6">
      <nav className="flex items-center gap-3 md:gap-4 font-medium">
        <Link
          to="/dashboard"
          className="hover:text-red-600"
        >
          Home
        </Link>
        <span className="text-slate-400">|</span>

        {isAuthenticated ? (
          <>
            <Link
              to="/"
              className={`
                text-slate-700 
                hover:text-blue-600 hover:underline
                focus:underline
                focus:decoration-blue-600 
                focus:ring-offset-gray-800 
                transition-colors duration-200
                ${isActive("/") ? "text-red-600 underline" : ""}
              `}
            >
              Dashboard
            </Link>
            <span className="text-slate-400">|</span>

            <button
              onClick={handleLogout}
              className="px-2 py-1 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors ml-1 text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className={`
                text-slate-700 
                hover:text-blue-600 hover:underline 
                focus:underline 
                focus:ring-offset-gray-800 
                transition-colors duration-200
                ${isActive("/login") ? "text-red-600 underline" : ""}
              `}
            >
              Login
            </Link>
            <span className="text-slate-400">|</span>
            <Link
              to="/signup"
              className={`
                text-slate-700 
                hover:text-blue-600 hover:underline 
                focus:underline 
                focus:ring-offset-gray-800 
                transition-colors duration-200
                ${isActive("/signup") ? "text-red-600 underline" : ""}
              `}
            >
              Signup
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;



// import { NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Navbar = () => {
//   const { logout, isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     logout();
//     navigate("/login");
//   };

//   // Custom style function for active links
//   const navLinkStyle = ({ isActive }) =>
//     `hover:text-blue-600 hover:underline ${
//       isActive ? "text-red-600 underline" : "text-slate-700"
//     }`;

//   return (
//     <header className="bg-gray-800 shadow-sm py-3 px-4 md:px-6">
//       <nav className="flex items-center gap-3 md:gap-4 font-medium">
//         <NavLink to="/dashboard" className="hover:text-red-600">
//           Home
//         </NavLink>
//         <span className="text-slate-400">|</span>

//         {isAuthenticated ? (
//           <>
//             <NavLink to="/" className={navLinkStyle}>
//               Dashboard
//             </NavLink>
//             <span className="text-slate-400">|</span>

//             <button
//               onClick={handleLogout}
//               className="px-2 py-1 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors ml-1 text-sm"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <NavLink to="/login" className={navLinkStyle}>
//               Login
//             </NavLink>
//             <span className="text-slate-400">|</span>
//             <NavLink to="/signup" className={navLinkStyle}>
//               Signup
//             </NavLink>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;



//  <NavLink
//           to="/"
//           className="text-slate-700 hover:text-blue-600 hover:underline aria-[current=page]:underline aria-[current=page]:text-blue-600"
//         >
//           Home
//         </NavLink>
//         <span className="text-slate-700">|</span>
//         {isAuthenticated ? (
//           <>
//             <NavLink
//               to="/dashboard"
//               className="text-slate-700 hover:text-blue-600 hover:underline aria-[current=page]:underline aria-[current=page]:text-blue-600"
//             >
//               Dashboard
//             </NavLink>
//             <span className="text-slate-700">|</span>
//             <button
//               onClick={handleLogout}
//               className="px-2 py-1 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors ml-1 text-sm"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <NavLink
//               to="/login"
//               className="text-slate-700 hover:text-blue-600 hover:underline aria-[current=page]:underline aria-[current=page]:text-blue-600"
//             >
//               Login
//             </NavLink>
//             <span className="text-slate-700">|</span>
//             <NavLink
//               to="/signup"
//               className="text-slate-700 hover:text-blue-600 hover:underline aria-[current=page]:underline aria-[current=page]:text-blue-600"
//             >
//               Signup
//             </NavLink>
//           </>
//         )}
// <nav className="bg-blue-800 p-4 flex justify-between items-center shadow-md">
//   {/* If you want a site title or other items, add them here */}
//   <button
//     onClick={handleLogout}
//     className="bg-white text-blue-800 font-medium px-4 py-2 rounded hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//   >
//     Logout
//   </button>
// </nav>
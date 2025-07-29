// Layout.jsx
// import Navbar from "../components/Navbar";
// // import Footer from "./components/Footer";
// import { Outlet } from "react-router-dom";

// export default function Layout() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         <Outlet /> 
//       {/* Outlet  This renders the matched child route's element or like /login so display it or any other current route */}
//       </main>
//       {/* <Footer /> */}
//     </>
//   );
// }

import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../index.css"
import Navbar from "../components/Navbar"

const SharedLayout = () => {
  const { logout, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen  bg-[#242424]">
      <Navbar />
      <hr className="border-gray-200 my-2" />
      <Outlet className="bg-black" />
    </div>

  );
};

export default SharedLayout;

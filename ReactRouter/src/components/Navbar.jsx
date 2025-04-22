// Navbar.jsx

import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <nav className="bg-gray-800 flex text-white p-4 justify-center">
      <ul className="flex gap-6">
        <li>
            <Link to="/">Products</Link>
        </li>
        <li>
            <Link to="/ContactUs">Contact Us</Link>
        </li>
        <li>
            <Link to="/AuthForm">Login</Link>
        </li>
        <li>
            <Link to="/TodoWithReducer">Todo Example</Link>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;

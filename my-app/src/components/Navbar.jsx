// File: src/components/Navbar.jsx

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-gray-800 text-white p-4'>
            <ul className='flex gap-6 justify-evenly items-center'>
                <li>
                    <Link to="/" className="text-white no-underline hover:underline hover:text-gray-300">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="text-white no-underline hover:underline hover:text-gray-300">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/blog" className="text-white no-underline hover:underline hover:text-gray-300">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link to="/blogdetails" className="text-white no-underline hover:underline hover:text-gray-300">
                        Blog Details
                    </Link>
                </li>
                <li>
                    <Link to="/blogdetails/:id" className="text-white no-underline hover:underline hover:text-gray-300">
                        Blog Details with ID
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

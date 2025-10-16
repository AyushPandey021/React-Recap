import React, { useState } from 'react';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">MyLogo</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">About</a></li>
          <li><a href="#" className="hover:text-blue-600">Services</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white px-6 py-3 space-y-3 shadow-md">
          <li><h1 className='text-5xl item-center'>Ayush Pandey</h1></li>
        </ul>
      )}
    </nav>
  );
};

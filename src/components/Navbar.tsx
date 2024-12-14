import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-gray-800 text-white py-1 px-4 flex items-center">
      <ul className="flex space-x-6">
        <li className="hover:underline cursor-pointer">File</li>
        <li className="hover:underline cursor-pointer">Edit</li>
        <li className="hover:underline cursor-pointer">View</li>
      </ul>
    </nav>
  );
};

export default Navbar;
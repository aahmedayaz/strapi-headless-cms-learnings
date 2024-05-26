import React from 'react'
import profileIcon from '../assets/profile-icon.avif'

const Navbar = () => {
  return (
    <nav className="bg-[#211242] flex items-center justify-between px-16 py-2">
      {/* Logo */}
      <div className="flex items-center">
        <h1 
          className="text-white text-3xl font-bold font-mono"
          style={{fontFamily: 'Sevillana'}}>
            Case Study
          </h1>
      </div>

      {/* List Items */}
      <ul className="flex space-x-4 text-white">
        <li>
          <a href="#" className="hover:text-gray-400">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">About</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">Services</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">Blog</a>
        </li>
      </ul>

      {/* User Info */}
      <div className="flex items-center">
        <img src={profileIcon} alt="User Placeholder" className="h-8 w-8 rounded-full mr-2" />
        <span className="text-white text-sm">Welcome, John Doe</span>
      </div>
    </nav>
  )
}

export default Navbar
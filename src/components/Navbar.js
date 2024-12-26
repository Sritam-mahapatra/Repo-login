import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

import {
  FaCode,
  FaHome,
  FaCloud,
  FaSignOutAlt,
  FaChevronDown,
  FaFileAlt,
  FaCog,
  FaPhone,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();  // Prevent closing the mobile menu when clicking on the dropdown
    setDropdownOpen(!dropdownOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserDropdown = (e) => {
    e.stopPropagation();  // Prevent closing the mobile menu when clicking on the user dropdown
    setUserDropdownOpen(!userDropdownOpen);
  };

  return (
    <div>
      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-gray-50 p-4 flex justify-between items-center z-50">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
          <span className="text-lg">CodeAnt AI</span>
        </div>
        {/* Toggle hamburger and cross icon */}
        {isMobileMenuOpen ? (
          <FaTimes className="text-2xl cursor-pointer" onClick={toggleMobileMenu} />
        ) : (
          <FaBars className="text-2xl cursor-pointer" onClick={toggleMobileMenu} />
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-40`}
        onClick={toggleMobileMenu}
      >
        <div className="w-full bg-gray-50 text-gray-900 flex flex-col h-auto">
          {/* Close Button (Cross Icon) */}
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
              <span>CodeAnt AI</span>
            </div>
            <FaTimes
              className="text-2xl cursor-pointer"
              onClick={toggleMobileMenu}  // Close mobile menu when clicked
            />
          </div>

          {/* User Info in Mobile */}
          <div className="p-4 relative">
            <div
              className="bg-gray-50 p-2 rounded-md text-center flex justify-between items-center cursor-pointer border border-gray-300 text-sm"
              onClick={toggleUserDropdown} // Toggle dropdown on click
            >
              <span>SritamMahapatra</span>
              <FaChevronDown
                className={`transform transition-transform ${userDropdownOpen ? 'rotate-180' : ''}`}
              />
            </div>
            {userDropdownOpen && ( // Render dropdown if open
              <div className="absolute top-full left-0 w-full bg-gray-100 border border-gray-300 rounded-md mt-2 shadow-lg z-10">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <Link to="/account-settings">Account Settings</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <Link to="/logout">Logout</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="">
            <Link
              to="/repository"
              className={`flex items-center my-1 px-4 py-2 rounded-lg w-full text-left ${activeLink === 'repository' ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white'}`}
              onClick={() => handleLinkClick('repository')}
            >
              <FaHome className="mr-3" /> Repository
            </Link>
            <Link
              to="/ai-code-review"
              className={`flex items-center my-1 px-4 py-2 rounded-lg w-full text-left ${activeLink === 'ai-code-review' ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white'}`}
              onClick={() => handleLinkClick('ai-code-review')}
            >
              <FaCode className="mr-3" /> AI Code Review
            </Link>
            <Link
              to="/cloud-security"
              className={`flex items-center my-1 px-4 py-2 rounded-lg w-full text-left ${activeLink === 'cloud-security' ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white'}`}
              onClick={() => handleLinkClick('cloud-security')}
            >
              <FaCloud className="mr-3" /> Cloud Security
            </Link>
            <Link
              to="/how-to-use"
              className={`flex items-center my-1 px-4 py-2 rounded-lg w-full text-left ${activeLink === 'how-to-use' ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white'}`}
              onClick={() => handleLinkClick('how-to-use')}
            >
              <FaFileAlt className="mr-3" /> How to Use
            </Link>
            <Link
              to="/settings"
              className={`flex items-center my-1 px-4 py-2 rounded-lg w-full text-left ${activeLink === 'settings' ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white'}`}
              onClick={() => handleLinkClick('settings')}
            >
              <FaCog className="mr-3" /> Settings
            </Link>
            <Link
              to="/support"
              className={`flex items-center my-1 px-4 py-2 rounded-lg w-full text-left ${activeLink === 'support' ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white'}`}
              onClick={() => handleLinkClick('support')}
            >
              <FaPhone className="mr-3" /> Support
            </Link>
            <Link
              to="/logout"
              className={`flex items-center my-1 px-4 py-2 rounded-lg w-full text-left ${activeLink === 'logout' ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white'}`}
              onClick={() => handleLinkClick('logout')}
            >
              <FaSignOutAlt className="mr-3" /> Logout
            </Link>
          </nav>

          {/* Bottom Buttons */}
          <div className="p-4">
            
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex w-64 bg-gray-50 text-gray-900 flex-col justify-between h-screen">
        <div>
          {/* Product Name with Logo */}
          <div className="p-4 text-xl font-thin font-sans border-gray-300 flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
            <span>CodeAnt AI</span>
          </div>

          {/* User Info with Dropdown */}
          <div className="p-4 relative">
            <div
              className="bg-gray-50 p-2 rounded-md text-center flex justify-between items-center cursor-pointer border border-gray-300 text-sm"
              onClick={toggleDropdown}
            >
              <span>SritamMahapatra</span>
              <FaChevronDown className={`transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            {dropdownOpen && (
              <div className="absolute top-full left-0 w-full bg-gray-100 border border-gray-300 rounded-md mt-2 shadow-lg z-10">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <Link to="/account-settings">Account Settings</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <Link to="/logout">Logout</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="mt-4">
            <Link
              to="/repository"
              className={`flex items-center my-1 px-4 py-2 rounded-lg ${activeLink === 'repository' ? 'bg-blue-600 text-white ml-3' : 'hover:bg-blue-600 hover:text-white hover:ml-3'}`}
              onClick={() => handleLinkClick('repository')}
            >
              <FaHome className="mr-3" /> Repository
            </Link>
            <Link
              to="/ai-code-review"
              className={`flex items-center my-1 px-4 py-2 rounded-lg ${activeLink === 'ai-code-review' ? 'bg-blue-600 text-white ml-3' : 'hover:bg-blue-600 hover:text-white hover:ml-3'}`}
              onClick={() => handleLinkClick('ai-code-review')}
            >
              <FaCode className="mr-3" /> AI Code Review
            </Link>
            <Link
              to="/cloud-security"
              className={`flex items-center my-1 px-4 py-2 rounded-lg ${activeLink === 'cloud-security' ? 'bg-blue-600 text-white ml-3' : 'hover:bg-blue-600 hover:text-white hover:ml-3'}`}
              onClick={() => handleLinkClick('cloud-security')}
            >
              <FaCloud className="mr-3" /> Cloud Security
            </Link>
            <Link
              to="/how-to-use"
              className={`flex items-center my-1 px-4 py-2 rounded-lg ${activeLink === 'how-to-use' ? 'bg-blue-600 text-white ml-3' : 'hover:bg-blue-600 hover:text-white hover:ml-3'}`}
              onClick={() => handleLinkClick('how-to-use')}
            >
              <FaFileAlt className="mr-3" /> How to Use
            </Link>
            <Link
              to="/settings"
              className={`flex items-center my-1 px-4 py-2 rounded-lg ${activeLink === 'settings' ? 'bg-blue-600 text-white ml-3' : 'hover:bg-blue-600 hover:text-white hover:ml-3'}`}
              onClick={() => handleLinkClick('settings')}
            >
              <FaCog className="mr-3" /> Settings
            </Link>
          </nav>
        </div>

        {/* Bottom Buttons */}
        <div className="p-4">
          <Link
            to="/support"
            className={`flex items-center my-1 px-4 py-2 rounded-lg ${activeLink === 'support' ? 'bg-blue-600 text-white ml-3' : 'hover:bg-blue-600 hover:text-white hover:ml-3'}`}
            onClick={() => handleLinkClick('support')}
          >
            <FaPhone className="mr-3" /> Support
          </Link>
          <Link
            to="/logout"
            className={`flex items-center my-1 px-4 py-2 rounded-lg ${activeLink === 'logout' ? 'bg-blue-600 text-white ml-3' : 'hover:bg-blue-600 hover:text-white hover:ml-3'}`}
            onClick={() => handleLinkClick('logout')}
          >
            <FaSignOutAlt className="mr-3" /> Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

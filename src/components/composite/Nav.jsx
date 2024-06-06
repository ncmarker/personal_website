import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.scss';
import Button from '../common/Button.jsx';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    navigate(`/`);
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsOpen(false);
  };

  return (
    <nav className="relative flex items-center px-8 py-4 text-white h-[77px]">
      <div className="absolute left-8">
        <Link to="/">
          <img src="/images/icons/logo_icon.png" alt="Logo" className="w-[27px]" />
        </Link>
      </div>
      
      <div className="hidden md:flex flex-1 justify-center space-x-8 bold-grey-text">
        <button onClick={() => handleNavigation('projects')} className="hover:text-white">Projects</button>
        <button onClick={() => handleNavigation('about')} className="hover:text-white">About</button>
        <button onClick={() => handleNavigation('contact')} className="hover:text-white">Contact</button>
      </div>
      
      <div className="hidden md:block absolute right-8">
        <Button styleType="filled" text="Resume" link="https://drive.google.com/file/d/1tDPzm3_wVw4KKb7MEEf4AKZTPhrd8O2k/view" />
      </div>

      <div className="md:hidden absolute right-8">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-color flex flex-col items-center space-y-4 py-4 md:hidden">
          <button onClick={() => handleNavigation('projects')} className="hover:text-white">Projects</button>
          <button onClick={() => handleNavigation('about')} className="hover:text-white">About</button>
          <button onClick={() => handleNavigation('contact')} className="hover:text-white">Contact</button>
          <Button styleType="filled" text="Resume" link="https://drive.google.com/file/d/1tDPzm3_wVw4KKb7MEEf4AKZTPhrd8O2k/view" />
        </div>
      )}
    </nav>
  );
}

export default Nav;

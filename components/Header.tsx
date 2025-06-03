
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const LogoIcon: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
    <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 17L12 22L21 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Header: React.FC = () => {
  const linkClass = "px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-200";
  const activeLinkClass = "px-3 py-2 rounded-md text-sm font-medium text-cyan-400 bg-slate-700/70";

  return (
    <header className="bg-slate-800/70 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-slate-700/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <LogoIcon />
          <span className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">Assistant.AI</span>
        </Link>
        <div className="space-x-1 sm:space-x-3">
          <NavLink 
            to="/" 
            className={({ isActive }): string => isActive ? activeLinkClass : linkClass}
          >
            Home
          </NavLink>
          <NavLink 
            to="/chat" 
            className={({ isActive }): string => isActive ? activeLinkClass : linkClass}
          >
            Chat
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;

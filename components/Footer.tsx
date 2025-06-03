
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800/70 border-t border-slate-700/50 py-8 text-center">
      <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} Assistant.AI. All rights reserved.</p>
      <p className="text-slate-500 text-xs mt-1">
        Designed with <span className="text-red-500 animate-pulse">❤</span> using React & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;

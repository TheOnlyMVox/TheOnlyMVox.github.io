
import React from 'react';
import { Link } from 'react-router-dom';

const ChatBubbleIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-3.86 8.25-8.625 8.25S3.75 16.556 3.75 12 7.61 3.75 12.375 3.75 21 7.444 21 12Zm-2.625 .75c-.938-.976-1.688-2.148-2.25-3.438" />
  </svg>
);

const ArrowLeftIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  </svg>
);


const ChatPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 sm:py-20 px-4 min-h-[calc(100vh-144px)]"> {/* Adjusted min-height for header+footer */}
      <div className="bg-slate-800 p-8 sm:p-12 md:p-16 rounded-xl shadow-2xl max-w-2xl w-full border border-slate-700/50 animate-fade-in-up">
        <div className="mb-8">
          <ChatBubbleIcon />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-6">
          Welcome to <span className="text-cyan-400">Assistant.AI</span> Chat
        </h1>
        <p className="text-slate-400 text-lg sm:text-xl mb-10 leading-relaxed">
          Our intelligent chat interface is currently under meticulous development and will be launching soon.
          Get ready to experience seamless conversations and powerful AI assistance like never before!
        </p>
        <Link
          to="/"
          className="group inline-flex items-center justify-center px-6 py-3 text-md sm:text-lg font-semibold text-slate-900 bg-cyan-400 rounded-lg shadow-md hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/70 transition-all duration-300 transform hover:scale-105"
        >
          <ArrowLeftIcon />
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ChatPage;


import React from 'react';
import { Link } from 'react-router-dom';

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-slate-800 p-6 rounded-xl shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up">
    <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-slate-100 mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const LightbulbIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3 .378A6.011 6.011 0 0 1 12 12.75c-1.627 0-3.128.57-4.25 1.5M15 12.75A3 3 0 0 1 12 15.75c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 15.75A3 3 0 0 0 12 18.75m3-3A3 3 0 0 1 12 18.75m0-6A3 3 0 0 0 9.75 9.75M12 3.75A3 3 0 0 1 14.25 6.75m-4.5 0A3 3 0 0 0 12 3.75" />
  </svg>
);
const ZapIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
);
const CogIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.008 1.119-1.238.558-.23 1.18-.23 1.738 0 .558.23 1.028.696 1.119 1.238l.095.572a2.25 2.25 0 0 0 3.804 1.58l.496-.286c.49-.284 1.072-.248 1.538.082c.466.33.712.886.67 1.46l-.04.482a2.253 2.253 0 0 0 1.423 2.88l.54.18c.586.196 1.006.71 1.006 1.332s-.42 1.136-1.006 1.332l-.54.18a2.253 2.253 0 0 0-1.423 2.88l.04.482c.042.574-.204 1.13-.67 1.46c-.466.33-1.048.366-1.538.082l-.496-.286a2.25 2.25 0 0 0-3.804 1.58l-.095.572c-.09.542-.56 1.008-1.119 1.238c-.558.23-1.18.23-1.738 0c-.558-.23-1.028-.696-1.119-1.238l-.095-.572a2.25 2.25 0 0 0-3.804-1.58l-.496.286c-.49.284-1.072.248-1.538-.082c-.466-.33-.712-.886-.67-1.46l.04-.482a2.253 2.253 0 0 0-1.423-2.88l-.54-.18C3.42 13.136 3 12.612 3 11.992s.42-1.136 1.006-1.332l.54-.18a2.253 2.253 0 0 0 1.423-2.88l-.04-.482c-.042-.574.204-1.13.67-1.46c.466-.33 1.048-.366 1.538-.082l.496.286a2.25 2.25 0 0 0 3.804-1.58l.095-.572ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" />
  </svg>
);

const LandingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-slate-900 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-cyan-500/30 via-blue-600/30 to-purple-600/30 opacity-50 blur-[120px]"></div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-up">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            Assistant.AI
          </span>
          <span className="block text-slate-300 mt-2 text-2xl sm:text-3xl md:text-4xl">Your Intelligent Companion</span>
        </h1>
        <p className="text-md sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-in-up [animation-delay:0.2s]">
          Unlock the power of AI to streamline your tasks, get instant answers, and boost your productivity. Assistant.AI is here to help you achieve more, faster.
        </p>
        <Link
          to="/chat"
          className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 text-md sm:text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-xl hover:shadow-cyan-500/40 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 transform hover:scale-105 transition-all duration-300 animate-fade-in-up [animation-delay:0.4s] animate-subtle-pulse"
        >
          Start Chatting Now
          <ArrowRightIcon />
        </Link>
        <div className="mt-16 md:mt-24 animate-fade-in-up [animation-delay:0.6s]">
          <img 
            src="https://picsum.photos/seed/aiInterfaceDark/1000/500" 
            alt="AI Assistant platform mockup" 
            className="rounded-xl shadow-2xl mx-auto max-w-3xl w-full border-2 border-slate-700/50 opacity-90 hover:opacity-100 transition-opacity duration-300" 
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-16">
          Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Assistant.AI</span>?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Smart Conversations" 
            description="Engage in natural, intelligent dialogues. Get information, brainstorm ideas, or simply explore topics with an AI that understands context."
            icon={<LightbulbIcon />} 
          />
          <FeatureCard 
            title="Instant Productivity" 
            description="Automate tedious tasks, generate creative content, summarize long documents, and get code snippets in seconds. Save time and mental energy."
            icon={<ZapIcon />}
          />
          <FeatureCard 
            title="Always Evolving" 
            description="Powered by cutting-edge AI models, Assistant.AI continuously learns and improves to provide you with the most accurate and helpful responses."
            icon={<CogIcon />}
          />
        </div>
      </section>

       {/* Call to Action Section */}
       <section className="text-center py-16 md:py-20 my-12 bg-gradient-to-br from-slate-800/80 via-slate-850/80 to-slate-800/80 rounded-xl shadow-2xl border border-slate-700/50">
        <h2 className="text-3xl font-bold text-slate-100 mb-4">Ready to Experience the Future of Assistance?</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-8 text-lg">
          Join a growing community of users leveraging the power of Assistant.AI.
          Your journey towards enhanced productivity starts here.
        </p>
        <Link
          to="/chat"
          className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-lg hover:shadow-cyan-500/50 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 transform hover:scale-105 transition-all duration-300 animate-subtle-pulse"
        >
          Explore Chat Features
          <ArrowRightIcon />
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;

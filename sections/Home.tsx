
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[70vh] py-20">
      <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-full">
        Available for new opportunities
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
        Building Digital <span className="text-gradient">Experiences</span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
        Aspiring software developer specializing in Python, SQL, and AI-driven solutions. 
        Passionately crafting efficient, scalable, and user-friendly software.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link 
          to="/projects" 
          className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-violet-500/20 flex items-center gap-2 group"
        >
          View My Work
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </Link>
        <Link 
          to="/contact" 
          className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all"
        >
          Let's Talk
        </Link>
      </div>

      <div className="mt-16 flex items-center gap-8 text-gray-500">
        <a href="https://github.com/shreyas" className="hover:text-white transition-colors">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com/in/shreyas" className="hover:text-white transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="#" className="hover:text-white transition-colors">
          <Twitter size={24} />
        </a>
      </div>
    </div>
  );
};

export default Home;

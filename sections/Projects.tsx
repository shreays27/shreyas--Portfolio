
import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gradient mb-4 inline-block">Featured Projects</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          A selection of projects that showcase my skills in backend engineering, 
          AI integration, and full-stack development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="group relative glass rounded-2xl overflow-hidden border border-white/5 hover:border-violet-500/30 transition-all hover:translate-y-[-4px]">
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-violet-600 rounded-lg text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-semibold transition-all"
                >
                  Live Demo
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center py-10">
        <a 
          href="https://github.com/shreyas" 
          className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors font-medium underline decoration-violet-500/30 underline-offset-4"
        >
          <Layers size={20} />
          Browse more on GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;

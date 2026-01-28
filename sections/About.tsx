
import React from 'react';
import { CheckCircle2, Award, Zap, Code2 } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: <Zap className="text-yellow-400" />, label: 'Python & Django' },
    { icon: <CheckCircle2 className="text-green-400" />, label: 'SQL & Database Design' },
    { icon: <Code2 className="text-blue-400" />, label: 'React & TypeScript' },
    { icon: <Award className="text-violet-400" />, label: 'AI & LangChain' },
  ];

  return (
    <div className="space-y-16">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <img 
            src="https://picsum.photos/seed/shreyas/400/400" 
            alt="Shreyas G" 
            className="relative w-64 h-64 rounded-full object-cover border-4 border-gray-900 shadow-2xl"
          />
        </div>
        
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-6 text-gradient inline-block">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Hello! I'm <strong className="text-white">Shreyas G</strong>, an aspiring software developer with a knack for solving complex puzzles through code. 
            My journey into technology began with a curiosity about how data drives decisions, which led me into the world of Python and AI.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            I thrive in environments where I can build impactful solutions—whether it's managing data efficiently using SQL or creating intelligent systems with LLMs. 
            Outside of coding, I'm always learning new frameworks and staying updated with the latest in tech innovation.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 glass rounded-xl border border-white/5">
                {skill.icon}
                <span className="font-medium text-gray-200">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass p-8 rounded-3xl border border-white/5 bg-violet-900/5">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
          My Journey
        </h3>
        <div className="space-y-8">
          <div className="relative pl-8 border-l border-white/10 pb-4">
            <div className="absolute left-[-5px] top-1.5 w-2 h-2 bg-violet-500 rounded-full"></div>
            <h4 className="font-semibold text-white">Full Stack & AI Explorer</h4>
            <p className="text-sm text-violet-400 mb-2">2023 - Present</p>
            <p className="text-gray-400 text-sm">Focused on building AI-powered applications and mastering modern web frameworks.</p>
          </div>
          <div className="relative pl-8 border-l border-white/10">
            <div className="absolute left-[-5px] top-1.5 w-2 h-2 bg-gray-600 rounded-full"></div>
            <h4 className="font-semibold text-white">Academic Deep Dive</h4>
            <p className="text-sm text-gray-500 mb-2">2021 - 2023</p>
            <p className="text-gray-400 text-sm">Intensive study of core CS concepts, algorithm design, and data structures.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

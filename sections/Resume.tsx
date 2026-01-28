
import React from 'react';
import { Download, Eye, FileText } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gradient mb-4 inline-block">My Resume</h2>
        <p className="text-gray-400">Detailed professional background and academic credentials.</p>
      </div>

      <div className="glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative bg-white/5">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <FileText size={300} className="text-violet-500" />
        </div>
        
        <div className="relative z-10 p-1 bg-white/5">
          <iframe 
            src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" 
            className="w-full h-[600px] rounded-2xl"
            title="Resume Preview"
          ></iframe>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <a 
          href="#" 
          className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-violet-500/20 flex items-center gap-2"
        >
          <Download size={20} />
          Download PDF
        </a>
        <button 
          className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all flex items-center gap-2"
        >
          <Eye size={20} />
          Fullscreen View
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="glass p-6 rounded-2xl border border-white/5">
          <h3 className="font-bold text-lg mb-4 text-violet-300">Technical Proficiency</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex justify-between"><span>Python (Django/Flask)</span><span className="text-white">Advanced</span></li>
            <li className="flex justify-between"><span>SQL & NoSQL</span><span className="text-white">Intermediate</span></li>
            <li className="flex justify-between"><span>React & TypeScript</span><span className="text-white">Intermediate</span></li>
            <li className="flex justify-between"><span>Machine Learning (Basics)</span><span className="text-white">Beginner</span></li>
          </ul>
        </div>
        <div className="glass p-6 rounded-2xl border border-white/5">
          <h3 className="font-bold text-lg mb-4 text-pink-300">Soft Skills</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex justify-between"><span>Problem Solving</span><span className="text-white">Expert</span></li>
            <li className="flex justify-between"><span>Team Collaboration</span><span className="text-white">High</span></li>
            <li className="flex justify-between"><span>Continuous Learning</span><span className="text-white">Always</span></li>
            <li className="flex justify-between"><span>Communication</span><span className="text-white">Fluent</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;

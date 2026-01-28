
import React from 'react';
import { Award, Download, ExternalLink } from 'lucide-react';
import { CERTIFICATES } from '../constants';

const Certificates: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gradient mb-4 inline-block">Certifications</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Recognition of skills acquired through professional courses and specialized training.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CERTIFICATES.map((cert, idx) => (
          <div key={idx} className="glass rounded-2xl border border-white/5 p-4 flex flex-col group hover:border-violet-500/20 transition-all">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gray-800 flex items-center justify-center">
              {cert.type === 'image' ? (
                <img src={cert.fileUrl} alt={cert.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" />
              ) : (
                <div className="flex flex-col items-center gap-3 text-gray-500">
                  <Award size={48} className="text-violet-500/50" />
                  <span className="text-xs uppercase tracking-widest font-semibold">PDF Certificate</span>
                </div>
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-opacity">
                <button className="p-2 bg-white/10 hover:bg-violet-600 rounded-lg text-white transition">
                  <ExternalLink size={20} />
                </button>
                <button className="p-2 bg-white/10 hover:bg-violet-600 rounded-lg text-white transition">
                  <Download size={20} />
                </button>
              </div>
            </div>
            
            <div className="px-2">
              <h3 className="font-semibold text-gray-100 mb-1 leading-snug">{cert.title}</h3>
              <p className="text-xs text-gray-500">Verified Certification</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;

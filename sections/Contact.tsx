
import React from 'react';
import { Mail, Phone, Linkedin, Github, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const contactLinks = [
    {
      label: 'Email',
      value: 'shreyashrey2703@gmail.com',
      href: 'mailto:shreyashrey2703@gmail.com',
      icon: <Mail className="text-red-400" />,
      color: 'hover:bg-red-500/10 hover:border-red-500/30'
    },
    {
      label: 'LinkedIn',
      value: 'in/shreyas',
      href: 'https://linkedin.com/in/shreyas',
      icon: <Linkedin className="text-blue-400" />,
      color: 'hover:bg-blue-500/10 hover:border-blue-500/30'
    },
    {
      label: 'GitHub',
      value: 'github.com/shreyas',
      href: 'https://github.com/shreyas',
      icon: <Github className="text-gray-400" />,
      color: 'hover:bg-white/10 hover:border-white/30'
    },
    {
      label: 'WhatsApp',
      value: '+91 63601 02050',
      href: 'https://wa.me/916360102050',
      icon: <MessageSquare className="text-green-400" />,
      color: 'hover:bg-green-500/10 hover:border-green-500/30'
    },
    {
      label: 'Phone',
      value: '+91 63601 02050',
      href: 'tel:+916360102050',
      icon: <Phone className="text-yellow-400" />,
      color: 'hover:bg-yellow-500/10 hover:border-yellow-500/30'
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Let's build something <span className="text-gradient">remarkable</span> together.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I'm currently seeking new opportunities. Whether you have a question, 
            a project proposal, or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="space-y-4">
          {contactLinks.map((link, idx) => (
            <a 
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-5 glass rounded-2xl border border-white/5 transition-all duration-300 ${link.color} group`}
            >
              <div className="p-3 bg-black/40 rounded-xl group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{link.label}</p>
                <p className="text-gray-100 font-medium group-hover:text-white">{link.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 blur-[60px]"></div>
        <h3 className="text-2xl font-bold text-white mb-8">Send a Quick Message</h3>
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-violet-500 transition"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">Your Email</label>
            <input 
              type="email" 
              placeholder="john@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-violet-500 transition"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
            <textarea 
              rows={4}
              placeholder="Hey Shreyas, I'd love to discuss a project..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-violet-500 transition resize-none"
            ></textarea>
          </div>
          <button 
            type="submit"
            onClick={(e) => e.preventDefault()}
            className="w-full py-5 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-violet-500/20 flex items-center justify-center gap-3 active:scale-95"
          >
            Send Message
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { getGeminiResponse } from '../services/gemini';

export const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: "Hi! I'm Shreyas's AI Assistant. Ask me anything about his skills, projects, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await getGeminiResponse(userMsg);
    
    setMessages(prev => [...prev, { role: 'bot', text: response }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-20 lg:bottom-8 right-6 z-[60]">
      {isOpen ? (
        <div className="w-80 sm:w-96 h-[500px] glass-dark border border-white/20 rounded-2xl flex flex-col shadow-2xl animate-in slide-in-from-bottom-4">
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-violet-600/20 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <Bot className="text-violet-400" size={20} />
              <span className="font-semibold text-white">Career Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition">
              <X size={20} />
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-violet-600 text-white rounded-tr-none' 
                    : 'bg-white/10 text-gray-100 rounded-tl-none border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 px-4 py-2 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-2">
                  <Loader2 className="animate-spin text-violet-400" size={14} />
                  <span className="text-xs text-gray-400">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask something..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-violet-500/50 transition text-white"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white p-2 rounded-lg transition"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-violet-600 hover:bg-violet-500 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 flex items-center gap-2"
        >
          <MessageCircle size={24} />
          <span className="hidden sm:inline font-medium pr-2">Ask Shreyas's AI</span>
        </button>
      )}
    </div>
  );
};

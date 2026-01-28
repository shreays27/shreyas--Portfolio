
import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar, MobileNav } from './components/Sidebar';
import { AIChatbot } from './components/AIChatbot';
import { Loader2 } from 'lucide-react';

// Lazy load sections
const Home = React.lazy(() => import('./sections/Home'));
const About = React.lazy(() => import('./sections/About'));
const Projects = React.lazy(() => import('./sections/Projects'));
const Resume = React.lazy(() => import('./sections/Resume'));
const Certificates = React.lazy(() => import('./sections/Certificates'));
const Contact = React.lazy(() => import('./sections/Contact'));

const LoadingFallback = () => (
  <div className="h-screen w-full flex items-center justify-center">
    <Loader2 className="animate-spin text-violet-500" size={48} />
  </div>
);

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black overflow-hidden selection:bg-violet-500/30">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-900/10 blur-[120px] rounded-full"></div>
      </div>

      <Sidebar />
      <MobileNav />
      <AIChatbot />

      <main className="lg:ml-64 relative z-10 min-h-screen">
        <Suspense fallback={<LoadingFallback />}>
          <div className="max-w-6xl mx-auto px-6 py-12 lg:py-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Suspense>
      </main>
    </div>
  );
};

export default App;

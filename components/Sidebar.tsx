
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

export const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 glass-dark hidden lg:flex flex-col p-6 z-50">
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-gradient">Shreyas G</h1>
        <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Software Developer</p>
      </div>
      
      <nav className="flex-1 space-y-2">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'bg-violet-500/20 text-violet-300 border-l-4 border-violet-500' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/10 text-xs text-gray-500">
        © 2024 Shreyas G Portfolio
      </div>
    </aside>
  );
};

export const MobileNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 lg:hidden glass-dark border-t border-white/10 flex justify-around items-center px-4 z-50">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 transition-all ${
              isActive ? 'text-violet-400' : 'text-gray-500'
            }`
          }
        >
          {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
        </NavLink>
      ))}
    </nav>
  );
};

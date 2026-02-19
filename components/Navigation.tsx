
import React from 'react';

const Navigation: React.FC = () => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Mondo', href: '#mondo' },
    { name: 'Poetica', href: '#poetica' },
    { name: 'Poesia', href: '#poesia' },
    { name: 'Mappe', href: '#mappe' },
    { name: 'Video', href: '#video' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight text-stone-800 uppercase tracking-widest">
          G. <span className="text-emerald-700">Pascoli</span>
        </div>
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-emerald-700 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden text-stone-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import { Sun, Moon, Home, User, Briefcase, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { Analytics } from "@vercel/analytics/react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', to: '/' },
    { id: 'about', icon: User, label: 'About', to: '/about' },
    { id: 'projects', icon: Briefcase, label: 'Projects', to: '/projects' },
    { id: 'contact', icon: Mail, label: 'Contact', to: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      {/* Navigation bar */}
      <div className="fixed top-0 left-0 right-0 flex justify-center items-center p-4 z-50">
        <nav className="bg-white dark:bg-zinc-900 rounded-full shadow-lg px-4 sm:px-6 py-3 flex items-center">
          <div className="flex items-center space-x-4 sm:space-x-6">
            {navItems.map(({ id, icon: Icon, label, to }) => (
              <Link key={id} to={to}>
                <button
                  className={`p-2 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-zinc-800 ${
                    window.location.pathname === to
                      ? 'bg-indigo-100 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-300'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </button>
              </Link>
            ))}
            {/* Theme toggle moved inside navigation */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>
      </div>

      <main className="h-screen flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-4xl animate-fadeIn mt-16">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;

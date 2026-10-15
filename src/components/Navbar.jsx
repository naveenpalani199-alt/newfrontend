import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Sun,
  Moon,
  Menu,
  GraduationCap,
  Sparkles,
  Command
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLearning } from '../context/LearningContext';

export default function Navbar({ onOpenSearch, onToggleSidebar }) {
  const { theme, toggleTheme } = useTheme();
  const { overallStats } = useLearning();

  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left Side: Mobile Menu Button & Brand (mobile view) */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link to="/" className="flex items-center gap-2.5 lg:hidden">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <span className="font-extrabold text-sm text-slate-900 dark:text-white tracking-tight">
                Naveen's Hub
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Search Trigger Button */}
        <div className="flex-1 max-w-md mx-auto">
          <button
            type="button"
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3.5 py-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200/70 dark:hover:bg-slate-800 border border-transparent hover:border-slate-300 dark:hover:border-slate-700 rounded-xl transition-all shadow-inner group"
          >
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
              <span className="truncate">Search tasks, days, concepts...</span>
            </span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-semibold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 shadow-xs">
              <Command className="w-3 h-3 inline" /> K
            </kbd>
          </button>
        </div>

        {/* Right Side: Theme Toggle & Profile Badge */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>

          {/* Profile Badge */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white font-black text-sm flex items-center justify-center shadow-sm">
                N
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" />
            </div>

            <div className="hidden sm:block leading-tight text-left">
              <p className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                <span>Naveen</span>
                <Sparkles className="w-3 h-3 text-amber-500" />
              </p>
              <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                Full-Stack Track
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

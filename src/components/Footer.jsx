import React from 'react';
import { Heart, Sparkles, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xs py-6 px-4 text-center">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-blue-500" />
          <span>
            &copy; 2026 <strong className="text-slate-800 dark:text-slate-200">Naveen</strong> &bull; Personal Web Development Learning Management System
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span>Crafted for Clean Code &amp; Continuous Learning</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
        </div>
      </div>
    </footer>
  );
}

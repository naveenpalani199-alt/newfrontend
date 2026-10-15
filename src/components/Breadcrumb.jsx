import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Home } from 'lucide-react';

export default function Breadcrumb({ items = [], backTo, backLabel = 'Back' }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (backTo) {
      navigate(backTo);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-3 mb-6 border-b border-slate-200 dark:border-slate-800">
      {/* Breadcrumb Path */}
      <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 sm:space-x-2 text-sm text-slate-500 dark:text-slate-400 overflow-x-auto py-1">
        <Link
          to="/"
          className="flex items-center gap-1.5 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 flex-shrink-0" />
              {isLast || !item.to ? (
                <span className="font-semibold text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-xs">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors truncate max-w-[150px] sm:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>

      {/* Back Button */}
      <button
        onClick={handleBack}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/80 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm active:scale-95"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>{backLabel}</span>
      </button>
    </div>
  );
}

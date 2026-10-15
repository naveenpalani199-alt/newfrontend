import React from 'react';

export default function StatsCard({
  icon: Icon,
  title,
  value,
  subtext,
  colorClass = 'text-blue-600 dark:text-blue-400',
  bgClass = 'bg-blue-50 dark:bg-blue-950/40',
  borderClass = 'border-slate-200 dark:border-slate-800'
}) {
  return (
    <div className={`relative overflow-hidden bg-white dark:bg-slate-900 border ${borderClass} rounded-2xl p-5 shadow-soft hover:shadow-soft-hover transition-all duration-300 group`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400 mb-1">
            {title}
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
            {value}
          </h3>
          {subtext && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-center gap-1 font-medium">
              {subtext}
            </p>
          )}
        </div>

        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bgClass} ${colorClass} transition-transform duration-300 group-hover:scale-110 shadow-sm flex-shrink-0`}>
          {Icon && <Icon className="w-6 h-6" />}
        </div>
      </div>

      {/* Subtle bottom accent line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

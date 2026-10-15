import React from 'react';

export default function ProgressBar({
  value = 0,
  max = 100,
  size = 'md',
  showLabel = true,
  labelPosition = 'right',
  colorClass = 'bg-blue-600 dark:bg-blue-500',
  trackClass = 'bg-slate-100 dark:bg-slate-800'
}) {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  const sizeClasses = {
    xs: 'h-1.5',
    sm: 'h-2',
    md: 'h-2.5',
    lg: 'h-3.5',
  };

  return (
    <div className="w-full">
      {showLabel && labelPosition === 'top' && (
        <div className="flex justify-between items-center mb-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
          <span>Progress</span>
          <span className="tabular-nums font-bold text-slate-900 dark:text-white">{percentage}%</span>
        </div>
      )}

      <div className="flex items-center gap-3">
        <div className={`flex-1 rounded-full overflow-hidden ${trackClass} ${sizeClasses[size] || sizeClasses.md}`}>
          <div
            className={`h-full rounded-full transition-all duration-700 ease-out ${colorClass}`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        {showLabel && labelPosition === 'right' && (
          <span className="text-xs font-bold tabular-nums text-slate-700 dark:text-slate-300 min-w-[36px] text-right">
            {percentage}%
          </span>
        )}
      </div>
    </div>
  );
}

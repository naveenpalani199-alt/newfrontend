import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ListTodo, Sparkles } from 'lucide-react';
import ProgressBar from './ProgressBar';
import { useLearning } from '../context/LearningContext';

export default function DayCard({ courseId, course, day }) {
  const navigate = useNavigate();
  const { getDayProgress } = useLearning();

  const progress = getDayProgress(courseId, day.day);
  const isCompleted = progress.percentage === 100 && progress.totalTasks > 0;
  const isComingSoon = day.comingSoon;

  const handleNavigate = () => {
    navigate(`/${courseId}/day/${day.day}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className={`group relative bg-white dark:bg-slate-900 border rounded-2xl p-6 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 ${
        isCompleted
          ? 'border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/10'
          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-extrabold uppercase tracking-wider"
              style={{
                backgroundColor: course.bgColor,
                color: course.color,
              }}
            >
              DAY {day.day}
            </span>

            {isCompleted && (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Done
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <ListTodo className="w-4 h-4" />
            <span>{isComingSoon ? 'Queued' : `${day.tasks.length} Tasks`}</span>
          </div>
        </div>

        {/* Day Title */}
        <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
          {day.title}
        </h4>

        {/* Short Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-5">
          {day.description}
        </p>
      </div>

      {/* Progress & Action Button */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
        {!isComingSoon ? (
          <div className="mb-4">
            <ProgressBar
              value={progress.percentage}
              max={100}
              size="sm"
              labelPosition="top"
              showLabel={true}
              colorClass={`bg-gradient-to-r ${course.gradient || 'from-blue-600 to-indigo-600'}`}
            />
          </div>
        ) : (
          <div className="py-2 px-3 mb-4 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/30 text-amber-700 dark:text-amber-400 text-xs font-medium flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Tasks Coming Soon</span>
          </div>
        )}

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNavigate();
          }}
          className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold transition-all duration-200 shadow-sm group/btn ${
            isCompleted
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
              : 'text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-900 hover:text-white dark:hover:bg-blue-600'
          }`}
        >
          <span>View Tasks</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

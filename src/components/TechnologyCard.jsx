import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Code,
  FileCode,
  Palette,
  Wind,
  Layers,
  Atom,
  Database,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import ProgressBar from './ProgressBar';
import { useLearning } from '../context/LearningContext';

const ICON_MAP = {
  html5: FileCode,
  palette: Palette,
  code: Code,
  wind: Wind,
  layers: Layers,
  atom: Atom,
  database: Database,
};

export default function TechnologyCard({ course }) {
  const navigate = useNavigate();
  const { getCourseProgress } = useLearning();

  const progress = getCourseProgress(course.id);
  const IconComponent = ICON_MAP[course.icon] || Code;

  const isCompleted = progress.percentage === 100 && progress.totalTasks > 0;

  return (
    <div
      onClick={() => navigate(`/${course.id}`)}
      className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:border-slate-300 dark:hover:border-slate-700"
    >
      {/* Top Header Row */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl shadow-sm transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
            style={{
              backgroundColor: course.bgColor,
              color: course.color,
            }}
          >
            <IconComponent className="w-7 h-7" />
          </div>

          <div className="flex flex-col items-end">
            {isCompleted ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Completed
              </span>
            ) : (
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${course.badgeColor}`}>
                {course.daysCount} Days Track
              </span>
            )}
            <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">
              {progress.completedCount} / {progress.totalTasks} Done
            </span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
            {course.title}
          </h3>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
            {course.subtitle}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-5">
          "{course.description}"
        </p>

        {/* Metadata Pill Grid */}
        <div className="grid grid-cols-2 gap-2.5 py-3 px-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl mb-5 border border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Duration</p>
              <p className="text-xs font-bold text-slate-900 dark:text-white">{course.daysCount} Days</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Total Tasks</p>
              <p className="text-xs font-bold text-slate-900 dark:text-white">{progress.totalTasks} Tasks</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress & Action Bottom */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
        <div className="mb-4">
          <ProgressBar
            value={progress.percentage}
            max={100}
            size="md"
            labelPosition="top"
            showLabel={true}
            colorClass={`bg-gradient-to-r ${course.gradient}`}
          />
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/${course.id}`);
          }}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600 transition-all duration-200 shadow-sm group-hover:shadow group/btn"
        >
          <span>Open Dashboard</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

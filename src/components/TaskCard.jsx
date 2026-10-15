import React from 'react';
import {
  ExternalLink,
  CheckCircle,
  Circle,
  FileCode,
  FileText,
  Database,
  Eye,
  AlertCircle,
  Clock
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { getTaskUrl } from '../utils/taskPaths';

const DIFFICULTY_STYLES = {
  Beginner: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50',
  Intermediate: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border-blue-200 dark:border-blue-800/50',
  Advanced: 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400 border-purple-200 dark:border-purple-800/50',
  Expert: 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border-rose-200 dark:border-rose-800/50',
};

const FILE_TYPE_ICONS = {
  html: FileCode,
  txt: FileText,
  sql: Database,
  'coming-soon': Clock,
};

export default function TaskCard({ task, course, onPreview }) {
  const { isTaskCompleted, toggleTaskCompletion } = useLearning();

  const completed = isTaskCompleted(task.id);
  const isComingSoon = task.isComingSoon || !task.path;
  const FileIcon = FILE_TYPE_ICONS[task.type] || FileCode;

  // Format file path relative to root
  const resolvedPath = task.path ? getTaskUrl(task.path) : '#';

  const handleOpenTask = (e) => {
    e.stopPropagation();
    if (isComingSoon) return;
    window.open(resolvedPath, '_blank', 'noopener,noreferrer');
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    if (isComingSoon) return;
    toggleTaskCompletion(task.id);
  };

  return (
    <div
      className={`group relative bg-white dark:bg-slate-900 border rounded-2xl p-6 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between ${
        completed
          ? 'border-emerald-300 dark:border-emerald-800/60 bg-gradient-to-br from-white to-emerald-50/20 dark:from-slate-900 dark:to-emerald-950/10'
          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      <div>
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              <FileIcon className="w-3.5 h-3.5 text-blue-500" />
              TASK {task.taskNumber}
            </span>

            {task.isTest && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                Evaluation Test
              </span>
            )}
          </div>

          {/* Difficulty Badge */}
          <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${DIFFICULTY_STYLES[task.difficulty] || DIFFICULTY_STYLES.Beginner}`}>
            {task.difficulty}
          </span>
        </div>

        {/* Task Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
          {task.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {task.description}
        </p>

        {/* Path / Location Pill */}
        {task.path ? (
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 mb-5 break-all">
            <span className="font-semibold text-slate-400 dark:text-slate-500">File:</span>
            <span className="truncate">{task.path}</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-xs text-amber-800 dark:text-amber-400 mb-5">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>Tasks queued for upcoming release</span>
          </div>
        )}
      </div>

      {/* Footer Actions & Status */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Completion Checkbox */}
        {!isComingSoon ? (
          <button
            type="button"
            onClick={handleToggle}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 border text-left ${
              completed
                ? 'bg-emerald-500 text-white border-emerald-600 shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60'
            }`}
          >
            {completed ? (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>✓ Completed</span>
              </>
            ) : (
              <>
                <Circle className="w-4 h-4 text-slate-400" />
                <span>Mark as Completed</span>
              </>
            )}
          </button>
        ) : (
          <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 py-1">
            Status: Queued
          </div>
        )}

        {/* Action Buttons: Preview & Open Task */}
        <div className="flex items-center gap-2">
          {!isComingSoon && onPreview && (
            <button
              type="button"
              onClick={() => onPreview(task)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm"
              title="Interactive In-App Preview"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview</span>
            </button>
          )}

          {!isComingSoon ? (
            <button
              type="button"
              onClick={handleOpenTask}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-200 shadow-sm hover:shadow active:scale-95"
            >
              <span>Open Task</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              disabled
              className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 dark:text-slate-600 bg-slate-100 dark:bg-slate-800/40 cursor-not-allowed border border-slate-200 dark:border-slate-800"
            >
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

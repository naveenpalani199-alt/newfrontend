import React, { useState } from 'react';
import {
  Settings,
  Sun,
  Moon,
  RotateCcw,
  CheckCircle2,
  Download,
  AlertTriangle,
  HardDrive,
  Sparkles
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { useTheme } from '../context/ThemeContext';
import { useLearning } from '../context/LearningContext';

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const { overallStats, resetAllProgress, completedTasks } = useLearning();
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(completedTasks, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "naveen_learning_progress.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleReset = () => {
    resetAllProgress();
    setShowConfirmReset(false);
    setResetSuccess(true);
    setTimeout(() => setResetSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-4xl">
      <Breadcrumb
        items={[
          { label: 'Settings & Data', to: '/settings' }
        ]}
        backTo="/"
        backLabel="Back to Home"
      />

      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
          <Settings className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <span>Platform Settings &amp; Data</span>
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Customize interface appearance and manage your learning progress state.
        </p>
      </div>

      {resetSuccess && (
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <span>All task completion history has been reset successfully.</span>
        </div>
      )}

      {/* Theme Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-soft">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          Appearance &amp; Theme
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5">
          Choose between light and dark interface themes for optimal code reading comfort.
        </p>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-bold border transition-all ${
              theme === 'light'
                ? 'bg-blue-50 text-blue-700 border-blue-300 shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
            }`}
          >
            <Sun className="w-4 h-4 text-amber-500" />
            <span>Light Theme</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-bold border transition-all ${
              theme === 'dark'
                ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
            }`}
          >
            <Moon className="w-4 h-4" />
            <span>Dark Theme</span>
          </button>
        </div>
      </div>

      {/* Progress Data & Backup */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-soft">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          Learning Progress Storage
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5">
          Your tasks and daily milestone completions are saved securely in browser <code>localStorage</code>.
        </p>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 mb-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-[11px] font-bold uppercase text-slate-400">Total Tasks</p>
            <p className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">{overallStats.totalTasks}</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase text-slate-400">Completed</p>
            <p className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">{overallStats.completedTasks}</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase text-slate-400">Remaining</p>
            <p className="text-xl font-extrabold text-amber-600 dark:text-amber-400 mt-1">{overallStats.totalTasks - overallStats.completedTasks}</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase text-slate-400">Completion</p>
            <p className="text-xl font-extrabold text-blue-600 dark:text-blue-400 mt-1">{overallStats.overallProgress}%</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleExport}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <Download className="w-4 h-4 text-blue-500" />
            <span>Export Progress JSON</span>
          </button>

          {!showConfirmReset ? (
            <button
              type="button"
              onClick={() => setShowConfirmReset(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-900 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset All Progress</span>
            </button>
          ) : (
            <div className="flex items-center gap-2 p-2 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-xl">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span className="text-xs font-bold text-rose-700 dark:text-rose-300">Are you sure?</span>
              <button
                type="button"
                onClick={handleReset}
                className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold shadow-xs"
              >
                Yes, Reset
              </button>
              <button
                type="button"
                onClick={() => setShowConfirmReset(false)}
                className="px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileCode,
  Palette,
  Code,
  Wind,
  Layers,
  Atom,
  Database,
  Briefcase,
  Settings,
  X,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Trophy
} from 'lucide-react';
import ProgressBar from './ProgressBar';
import { useLearning } from '../context/LearningContext';
import { COURSES } from '../data/coursesData';

const TECH_NAV = [
  { id: 'html', label: 'HTML5', path: '/html', icon: FileCode, color: 'text-orange-500' },
  { id: 'css', label: 'CSS3', path: '/css', icon: Palette, color: 'text-blue-500' },
  { id: 'javascript', label: 'JavaScript', path: '/javascript', icon: Code, color: 'text-yellow-500' },
  { id: 'tailwind', label: 'Tailwind CSS', path: '/tailwind', icon: Wind, color: 'text-sky-500' },
  { id: 'bootstrap', label: 'Bootstrap 5', path: '/bootstrap', icon: Layers, color: 'text-purple-500' },
  { id: 'react', label: 'React JS', path: '/react', icon: Atom, color: 'text-cyan-500' },
  { id: 'sql', label: 'SQL', path: '/sql', icon: Database, color: 'text-emerald-500' },
];

export default function Sidebar({ isOpen, onClose }) {
  const { overallStats, getCourseProgress } = useLearning();
  const location = useLocation();

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-xs lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header / Brand Logo */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white uppercase">
                  Naveen
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  LMS
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                Learning Hub
              </p>
            </div>
          </Link>

          {/* Close button for mobile */}
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Items */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">
          {/* Main Dashboard */}
          <div>
            <NavLink
              to="/"
              end
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`
              }
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>🏠 Dashboard</span>
            </NavLink>
          </div>

          {/* Technologies Section */}
          <div>
            <div className="flex items-center justify-between px-3 mb-2">
              <span className="text-[11px] font-black tracking-wider uppercase text-slate-400 dark:text-slate-500">
                📚 Technologies
              </span>
              <span className="text-[10px] font-bold text-slate-400">
                {TECH_NAV.length} Tracks
              </span>
            </div>

            <div className="space-y-1">
              {TECH_NAV.map((tech) => {
                const Icon = tech.icon;
                const progress = getCourseProgress(tech.id);
                const isActive = location.pathname.startsWith(tech.path);

                return (
                  <NavLink
                    key={tech.id}
                    to={tech.path}
                    onClick={handleLinkClick}
                    className={`flex items-center justify-between px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 group ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold border-l-4 border-blue-600'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon className={`w-4 h-4 ${tech.color} flex-shrink-0`} />
                      <span className="truncate">{tech.label}</span>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="text-[11px] font-bold tabular-nums text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300">
                        {progress.percentage}%
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Projects & Articles */}
          <div>
            <div className="px-3 mb-2">
              <span className="text-[11px] font-black tracking-wider uppercase text-slate-400 dark:text-slate-500">
                🚀 Showcase
              </span>
            </div>

            <div className="space-y-1">
              <NavLink
                to="/projects"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold border-l-4 border-blue-600'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`
                }
              >
                <Briefcase className="w-4 h-4 text-emerald-500" />
                <span>Projects & Articles</span>
              </NavLink>

              <NavLink
                to="/settings"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold border-l-4 border-blue-600'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`
                }
              >
                <Settings className="w-4 h-4 text-slate-500" />
                <span>⚙ Settings</span>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Bottom Overall Progress Card */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60">
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span>Overall Goal</span>
              </div>
              <span className="text-xs font-black text-blue-600 dark:text-blue-400 tabular-nums">
                {overallStats.overallProgress}%
              </span>
            </div>

            <ProgressBar
              value={overallStats.overallProgress}
              max={100}
              size="sm"
              showLabel={false}
              colorClass="bg-gradient-to-r from-blue-500 to-indigo-600"
            />

            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-medium flex items-center justify-between">
              <span>Completed</span>
              <strong className="text-slate-900 dark:text-white">
                {overallStats.completedTasks} / {overallStats.totalTasks}
              </strong>
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

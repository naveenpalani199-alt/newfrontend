import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  BookOpen,
  Calendar,
  CheckCircle2,
  TrendingUp,
  FolderGit2,
  ArrowRight,
  Code2,
  Layers,
  Filter
} from 'lucide-react';
import StatsCard from '../components/StatsCard';
import TechnologyCard from '../components/TechnologyCard';
import ProgressBar from '../components/ProgressBar';
import { useLearning } from '../context/LearningContext';
import { COURSES } from '../data/coursesData';
import { PROJECTS } from '../data/projectsData';

export default function HomeDashboard() {
  const { overallStats } = useLearning();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const navigate = useNavigate();

  const coursesList = Object.values(COURSES);

  const filteredCourses = selectedFilter === 'all'
    ? coursesList
    : coursesList.filter(c => c.id === selectedFilter);

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white p-6 sm:p-10 shadow-xl border border-slate-700/50">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mb-20" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive Learning Platform</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3">
            Naveen's Learning Hub
          </h1>

          <p className="text-base sm:text-xl font-medium text-slate-300 mb-6 tracking-wide">
            "Learn. Practice. Build. Grow."
          </p>

          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed mb-6">
            A comprehensive, modular dashboard organizing daily exercises across HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap, React JS, and SQL. Select a technology to begin.
          </p>

          {/* Quick Overall Bar in Hero */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-xl">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                Curriculum Progression
              </span>
              <span className="font-bold text-white text-sm tabular-nums">
                {overallStats.completedTasks} of {overallStats.totalTasks} Tasks ({overallStats.overallProgress}%)
              </span>
            </div>
            <ProgressBar
              value={overallStats.overallProgress}
              max={100}
              size="md"
              showLabel={false}
              colorClass="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400"
              trackClass="bg-white/10"
            />
          </div>
        </div>
      </div>

      {/* KPI Stats Overview Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>Learning Overview</span>
          </h2>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Real-time local state tracking
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5">
          <StatsCard
            icon={BookOpen}
            title="Total Technologies"
            value={overallStats.totalTechnologies}
            subtext="Comprehensive Tracks"
            colorClass="text-blue-600 dark:text-blue-400"
            bgClass="bg-blue-50 dark:bg-blue-950/40"
          />

          <StatsCard
            icon={Calendar}
            title="Total Learning Days"
            value={overallStats.totalLearningDays}
            subtext="Structured curriculum"
            colorClass="text-indigo-600 dark:text-indigo-400"
            bgClass="bg-indigo-50 dark:bg-indigo-950/40"
          />

          <StatsCard
            icon={Code2}
            title="Total Tasks"
            value={overallStats.totalTasks}
            subtext="Verified task files"
            colorClass="text-amber-600 dark:text-amber-400"
            bgClass="bg-amber-50 dark:bg-amber-950/40"
          />

          <StatsCard
            icon={CheckCircle2}
            title="Completed Tasks"
            value={overallStats.completedTasks}
            subtext="Saved in localStorage"
            colorClass="text-emerald-600 dark:text-emerald-400"
            bgClass="bg-emerald-50 dark:bg-emerald-950/40"
          />

          <StatsCard
            icon={TrendingUp}
            title="Overall Progress"
            value={`${overallStats.overallProgress}%`}
            subtext="Calculated live"
            colorClass="text-cyan-600 dark:text-cyan-400"
            bgClass="bg-cyan-50 dark:bg-cyan-950/40"
          />
        </div>
      </div>

      {/* Technology Tracks Section */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
              <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span>Technology Dashboards</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Select any technology below to drill into its daily learning schedule and individual task files.
            </p>
          </div>

          {/* Technology Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Tracks
            </button>
            {coursesList.map((course) => (
              <button
                key={course.id}
                type="button"
                onClick={() => setSelectedFilter(course.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedFilter === course.id
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {course.shortName}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <TechnologyCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Featured Projects & Articles Showcase */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FolderGit2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Articles &amp; Standalone Projects</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Production capstone projects built during frontend development training.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {proj.shortName}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">
                  {proj.subtitle}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-4">
                  {proj.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {proj.tags.slice(0, 2).map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={`/${proj.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-emerald-600 dark:bg-slate-800 dark:hover:bg-emerald-600 transition-all shadow-sm"
                >
                  <span>Launch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

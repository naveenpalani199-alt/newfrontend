import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  CheckCircle2,
  ListTodo,
  TrendingUp,
  Search,
  Sparkles,
  ArrowRight,
  Code,
  FileCode,
  Palette,
  Wind,
  Layers,
  Atom,
  Database
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import StatsCard from '../components/StatsCard';
import DayCard from '../components/DayCard';
import ProgressBar from '../components/ProgressBar';
import { useLearning } from '../context/LearningContext';
import { COURSES } from '../data/coursesData';

const ICON_MAP = {
  html5: FileCode,
  palette: Palette,
  code: Code,
  wind: Wind,
  layers: Layers,
  atom: Atom,
  database: Database,
};

export default function TechnologyDashboard({ courseId: propCourseId }) {
  const params = useParams();
  const courseId = propCourseId || params.courseId;
  const navigate = useNavigate();
  const { getCourseProgress, getDayProgress } = useLearning();

  const [daySearch, setDaySearch] = useState('');
  const [filterMode, setFilterMode] = useState('all'); // all | completed | in-progress

  const course = COURSES[courseId];

  if (!course) {
    return (
      <div className="py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Technology Track Not Found
        </h2>
        <p className="text-slate-500">
          The requested technology course does not exist in our curriculum.
        </p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  const progress = getCourseProgress(course.id);
  const IconComponent = ICON_MAP[course.icon] || Code;

  // Filter days based on search and status
  const filteredDays = course.days.filter((day) => {
    const query = daySearch.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      `day ${day.day}`.includes(query) ||
      day.title.toLowerCase().includes(query) ||
      day.description.toLowerCase().includes(query);

    if (!matchesSearch) return false;

    const dayProg = getDayProgress(course.id, day.day);
    const isCompleted = dayProg.percentage === 100 && dayProg.totalTasks > 0;

    if (filterMode === 'completed') return isCompleted;
    if (filterMode === 'in-progress') return !isCompleted;
    return true;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Breadcrumb Trail */}
      <Breadcrumb
        items={[
          { label: course.title, to: `/${course.id}` }
        ]}
        backTo="/"
        backLabel="Back to Home"
      />

      {/* Technology Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-soft">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-5">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-sm flex-shrink-0"
              style={{
                backgroundColor: course.bgColor,
                color: course.color,
              }}
            >
              <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${course.badgeColor}`}>
                  {course.shortName} Track
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {course.daysCount} Days Curriculum
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {course.title} Learning Dashboard
              </h1>

              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium mt-1">
                "{course.subtitle}"
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
                {course.description}
              </p>

              {courseId === 'react' && (
                <a
                  href="http://localhost:5173/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-bold transition-colors"
                >
                  Open My React Project ↗
                </a>
              )}
            </div>
          </div>

          {/* Right Header Progress Widget */}
          <div className="w-full md:w-64 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex-shrink-0">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              <span>Track Completion</span>
              <span className="text-sm font-extrabold text-blue-600 dark:text-blue-400 tabular-nums">
                {progress.percentage}%
              </span>
            </div>
            <ProgressBar
              value={progress.percentage}
              max={100}
              size="md"
              showLabel={false}
              colorClass={`bg-gradient-to-r ${course.gradient}`}
            />
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 flex items-center justify-between">
              <span>Finished:</span>
              <strong className="text-slate-900 dark:text-white">
                {progress.completedCount} of {progress.totalTasks} Tasks
              </strong>
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          icon={Calendar}
          title="Total Days"
          value={progress.totalDays}
          subtext="Learning milestones"
          colorClass="text-blue-600 dark:text-blue-400"
          bgClass="bg-blue-50 dark:bg-blue-950/40"
        />

        <StatsCard
          icon={ListTodo}
          title="Total Tasks"
          value={progress.totalTasks}
          subtext="Curriculum exercises"
          colorClass="text-indigo-600 dark:text-indigo-400"
          bgClass="bg-indigo-50 dark:bg-indigo-950/40"
        />

        <StatsCard
          icon={CheckCircle2}
          title="Completed Tasks"
          value={progress.completedCount}
          subtext={`${progress.completedDays} days finished`}
          colorClass="text-emerald-600 dark:text-emerald-400"
          bgClass="bg-emerald-50 dark:bg-emerald-950/40"
        />

        <StatsCard
          icon={TrendingUp}
          title="Progress"
          value={`${progress.percentage}%`}
          subtext="Overall mastery"
          colorClass="text-cyan-600 dark:text-cyan-400"
          bgClass="bg-cyan-50 dark:bg-cyan-950/40"
        />
      </div>

      {/* Controls Bar: Search & Filter Days */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-soft">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={daySearch}
            onChange={(e) => setDaySearch(e.target.value)}
            placeholder="Search days (e.g. 'Day 1', 'Forms', 'Flexbox')..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-blue-500 dark:focus:border-blue-400 text-slate-900 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterMode === 'all'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            All Days ({course.days.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterMode('completed')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterMode === 'completed'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Completed ({progress.completedDays})
          </button>
          <button
            type="button"
            onClick={() => setFilterMode('in-progress')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterMode === 'in-progress'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            In Progress
          </button>
        </div>
      </div>

      {/* Day Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <span>Daily Learning Schedule</span>
            <span className="text-xs font-bold text-slate-400">
              ({filteredDays.length} Days)
            </span>
          </h2>
        </div>

        {filteredDays.length === 0 ? (
          <div className="py-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500">
            <p className="font-semibold text-base">No days match your search criteria.</p>
            <p className="text-xs mt-1">Try resetting the filter to view all available days.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDays.map((day) => (
              <DayCard
                key={day.day}
                courseId={course.id}
                course={course}
                day={day}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

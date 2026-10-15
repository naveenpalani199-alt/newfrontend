import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ListTodo,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Search,
  Filter,
  CheckCheck
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import TaskCard from '../components/TaskCard';
import ProgressBar from '../components/ProgressBar';
import TaskViewerModal from '../components/TaskViewerModal';
import { useLearning } from '../context/LearningContext';
import { COURSES } from '../data/coursesData';

export default function DayTasksDashboard({ courseId: propCourseId }) {
  const params = useParams();
  const courseId = propCourseId || params.courseId;
  const dayNumber = Number(params.dayId);
  const navigate = useNavigate();

  const { getDayProgress, markAllTasksForDay } = useLearning();

  const [taskSearch, setTaskSearch] = useState('');
  const [filterMode, setFilterMode] = useState('all'); // all | completed | incomplete
  const [previewTask, setPreviewTask] = useState(null);

  const course = COURSES[courseId];

  if (!course) {
    return (
      <div className="py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Course Not Found</h2>
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

  const currentDayIndex = course.days.findIndex((d) => d.day === dayNumber);
  const day = course.days[currentDayIndex];

  if (!day) {
    return (
      <div className="py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Day {dayNumber} Not Found</h2>
        <p className="text-slate-500">This learning day does not exist in {course.title}.</p>
        <button
          type="button"
          onClick={() => navigate(`/${course.id}`)}
          className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm"
        >
          Back to {course.title} Dashboard
        </button>
      </div>
    );
  }

  const prevDay = currentDayIndex > 0 ? course.days[currentDayIndex - 1] : null;
  const nextDay = currentDayIndex < course.days.length - 1 ? course.days[currentDayIndex + 1] : null;

  const dayProgress = getDayProgress(course.id, day.day);
  const isDayAllDone = dayProgress.percentage === 100 && dayProgress.totalTasks > 0;

  // Filter tasks based on search & completion state
  const filteredTasks = (day.tasks || []).filter((task) => {
    const query = taskSearch.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      task.title.toLowerCase().includes(query) ||
      task.description.toLowerCase().includes(query) ||
      `task ${task.taskNumber}`.includes(query) ||
      (task.path && task.path.toLowerCase().includes(query));

    return matchesSearch;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Breadcrumb Navigation Trail */}
      <Breadcrumb
        items={[
          { label: course.title, to: `/${course.id}` },
          { label: `Day ${day.day}: ${day.title}`, to: `/${course.id}/day/${day.day}` }
        ]}
        backTo={`/${course.id}`}
        backLabel={`Back to ${course.shortName}`}
      />

      {/* Day Overview Header Card */}
      <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-soft">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider"
                style={{
                  backgroundColor: course.bgColor,
                  color: course.color,
                }}
              >
                DAY {day.day}
              </span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {course.title} Learning Milestone
              </span>
              {isDayAllDone && (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  All Tasks Completed
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Day {day.day}: {day.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
              {day.description}
            </p>
          </div>

          {/* Right Progress Card & Quick Action */}
          <div className="w-full md:w-72 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex-shrink-0">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              <span>Day Progress</span>
              <span className="text-sm font-extrabold text-blue-600 dark:text-blue-400 tabular-nums">
                {dayProgress.percentage}%
              </span>
            </div>

            <ProgressBar
              value={dayProgress.percentage}
              max={100}
              size="md"
              showLabel={false}
              colorClass={`bg-gradient-to-r ${course.gradient || 'from-blue-600 to-indigo-600'}`}
            />

            <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-2 mb-3">
              <span>Completed</span>
              <strong className="text-slate-900 dark:text-white">
                {dayProgress.completedCount} of {dayProgress.totalTasks} Tasks
              </strong>
            </div>

            {!isDayAllDone && day.tasks.length > 0 && !day.comingSoon && (
              <button
                type="button"
                onClick={() => markAllTasksForDay(course.id, day.day)}
                className="w-full py-2 px-3 text-xs font-bold text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800/60 transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <CheckCheck className="w-3.5 h-3.5" />
                <span>Mark All Completed</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Task Filters & Search Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-soft">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={taskSearch}
            onChange={(e) => setTaskSearch(e.target.value)}
            placeholder="Search tasks by title, file name, or difficulty..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-blue-500 dark:focus:border-blue-400 text-slate-900 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
          <ListTodo className="w-4 h-4 text-blue-500" />
          <span>{filteredTasks.length} Tasks Scheduled</span>
        </div>
      </div>

      {/* Tasks List Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <span>Exercises &amp; Tasks</span>
            <span className="text-xs font-bold text-slate-400">
              ({filteredTasks.length})
            </span>
          </h2>
        </div>

        {filteredTasks.length === 0 ? (
          <div className="py-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500">
            <p className="font-semibold text-base">No tasks found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                course={course}
                onPreview={(t) => setPreviewTask(t)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Day Navigation Footer (Previous / Next Day) */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
        {prevDay ? (
          <Link
            to={`/${course.id}/day/${prevDay.day}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 text-slate-700 dark:text-slate-200 text-sm font-bold shadow-soft hover:shadow-soft-hover transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-blue-500" />
            <div className="text-left">
              <span className="text-[10px] text-slate-400 block font-normal uppercase">Previous Day</span>
              <span>Day {prevDay.day}: {prevDay.title}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextDay ? (
          <Link
            to={`/${course.id}/day/${nextDay.day}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 text-slate-700 dark:text-slate-200 text-sm font-bold shadow-soft hover:shadow-soft-hover transition-all ml-auto"
          >
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block font-normal uppercase">Next Day</span>
              <span>Day {nextDay.day}: {nextDay.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-blue-500" />
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* In-App Interactive Task Viewer Modal */}
      {previewTask && (
        <TaskViewerModal
          task={previewTask}
          course={course}
          onClose={() => setPreviewTask(null)}
        />
      )}
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  X,
  Code,
  Calendar,
  FileCode,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Layers
} from 'lucide-react';
import { COURSES } from '../data/coursesData';
import { PROJECTS } from '../data/projectsData';

export default function GlobalSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled outside or via prop
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // Search logic across Technologies, Days, Tasks, Projects
  const results = {
    technologies: [],
    days: [],
    tasks: [],
    projects: [],
  };

  if (normalizedQuery) {
    // 1. Technologies
    Object.values(COURSES).forEach(course => {
      if (
        course.title.toLowerCase().includes(normalizedQuery) ||
        course.shortName.toLowerCase().includes(normalizedQuery) ||
        course.description.toLowerCase().includes(normalizedQuery)
      ) {
        results.technologies.push(course);
      }

      // 2. Days & Tasks inside course
      course.days.forEach(day => {
        const matchesDay =
          `day ${day.day}`.includes(normalizedQuery) ||
          day.title.toLowerCase().includes(normalizedQuery) ||
          day.description.toLowerCase().includes(normalizedQuery);

        if (matchesDay) {
          results.days.push({ ...day, courseId: course.id, courseTitle: course.title });
        }

        (day.tasks || []).forEach(task => {
          const matchesTask =
            task.title.toLowerCase().includes(normalizedQuery) ||
            task.description.toLowerCase().includes(normalizedQuery) ||
            (task.path && task.path.toLowerCase().includes(normalizedQuery)) ||
            `task ${task.taskNumber}`.includes(normalizedQuery);

          if (matchesTask) {
            results.tasks.push({
              ...task,
              dayNumber: day.day,
              courseId: course.id,
              courseTitle: course.title,
            });
          }
        });
      });
    });

    // 3. Projects
    PROJECTS.forEach(proj => {
      if (
        proj.title.toLowerCase().includes(normalizedQuery) ||
        proj.description.toLowerCase().includes(normalizedQuery) ||
        proj.tags.some(t => t.toLowerCase().includes(normalizedQuery))
      ) {
        results.projects.push(proj);
      }
    });
  }

  const totalResults =
    results.technologies.length +
    results.days.length +
    results.tasks.length +
    results.projects.length;

  const handleSelectTech = (courseId) => {
    navigate(`/${courseId}`);
    onClose();
  };

  const handleSelectDay = (courseId, dayNumber) => {
    navigate(`/${courseId}/day/${dayNumber}`);
    onClose();
  };

  const handleSelectTask = (task) => {
    navigate(`/${task.courseId}/day/${task.dayNumber}`);
    onClose();
  };

  const handleSelectProject = (project) => {
    window.open(`/${project.path}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 sm:pt-20 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 gap-3 bg-slate-50/50 dark:bg-slate-900">
          <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search technologies, days (e.g. 'Day 13'), tasks (e.g. 'DOM', 'Company')..."
            className="flex-1 bg-transparent border-0 outline-none text-slate-900 dark:text-white placeholder:text-slate-400 text-sm sm:text-base font-medium"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold text-slate-500 bg-slate-200 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 space-y-6 flex-1">
          {!normalizedQuery ? (
            <div className="py-8 text-center">
              <Sparkles className="w-8 h-8 text-blue-500 mx-auto mb-2 opacity-80" />
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Search your entire learning platform
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                Quickly locate any HTML, CSS, JavaScript, Tailwind, React, or SQL lesson, exercise, or standalone project.
              </p>

              {/* Quick links */}
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['DOM', 'Flexbox', 'Company', 'useState', 'Table', 'Grid', 'DDL'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/40 transition-colors"
                  >
                    "{tag}"
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center text-slate-500 dark:text-slate-400">
              <p className="text-sm font-medium">No results found for "{query}"</p>
              <p className="text-xs mt-1">Try searching by topic, module, or day number.</p>
            </div>
          ) : (
            <>
              {/* Technologies */}
              {results.technologies.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 px-1">
                    Technologies ({results.technologies.length})
                  </h4>
                  <div className="space-y-1">
                    {results.technologies.map((course) => (
                      <button
                        key={course.id}
                        type="button"
                        onClick={() => handleSelectTech(course.id)}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                            style={{ backgroundColor: course.bgColor, color: course.color }}
                          >
                            <Code className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                              {course.title}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                              {course.subtitle}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Tasks */}
              {results.tasks.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 px-1">
                    Tasks ({results.tasks.length})
                  </h4>
                  <div className="space-y-1">
                    {results.tasks.map((task) => (
                      <button
                        key={task.id}
                        type="button"
                        onClick={() => handleSelectTask(task)}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left group"
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <FileCode className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate">
                                {task.title}
                              </p>
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                Task {task.taskNumber}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                              <span className="font-semibold text-slate-700 dark:text-slate-300">{task.courseTitle}</span>
                              {' '}&rarr; Day {task.dayNumber}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Days */}
              {results.days.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 px-1">
                    Days ({results.days.length})
                  </h4>
                  <div className="space-y-1">
                    {results.days.map((day, idx) => (
                      <button
                        key={`${day.courseId}-${day.day}-${idx}`}
                        type="button"
                        onClick={() => handleSelectDay(day.courseId, day.day)}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate">
                              Day {day.day}: {day.title}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {day.courseTitle} &bull; {day.tasks.length} Tasks
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects */}
              {results.projects.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 px-1">
                    Projects ({results.projects.length})
                  </h4>
                  <div className="space-y-1">
                    {results.projects.map((proj) => (
                      <button
                        key={proj.id}
                        type="button"
                        onClick={() => handleSelectProject(proj)}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                              {proj.title}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {proj.subtitle}
                            </p>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-400" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span>Search index covers HTML, CSS, JS, Tailwind, Bootstrap, React, and SQL</span>
          <span className="font-semibold">{totalResults} matches</span>
        </div>
      </div>
    </div>
  );
}
